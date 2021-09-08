import {formatWeekDayTruncated} from './utils'

const removeDuplicates = (arr: string[]) => [...new Set(arr)]

type IRashData = {
  date: string
  data: {skinRash: string[]}
}
const rashData: IRashData[] = [
  {
    date: '2021-08-25T22:00:00.000Z',
    data: {
      skinRash: ['rightUpperArmInside', 'trunk', 'back', 'headAndNeckBack'],
    },
  },
  {
    date: '2021-08-26T22:00:00.000Z',
    data: {
      skinRash: ['trunk', 'back', 'leftUpperArmInside'],
    },
  },
]

type ResultEntry = {id: string; date: string[]}

{
  // everything done in une reduce

  const result0 = rashData.reduce((acc: ResultEntry[], curr) => {
    const aux = curr.data.skinRash.map(e => ({id: e, date: [formatWeekDayTruncated(curr.date)]}))
    const alreadyLoggedIds = aux.filter(e => acc.some(i => e.id === i.id))

    if (alreadyLoggedIds.length) {
      const notYetLoggedIds = aux.filter(e => !alreadyLoggedIds.some(i => e.id === i.id))
      const alreadyLoggedIdsWithNewDate = acc.map(e => ({
        id: e.id,
        date: [...e.date, formatWeekDayTruncated(curr.date)],
      }))
      return [...alreadyLoggedIdsWithNewDate, ...notYetLoggedIds]
    }
    return [...acc, ...aux]
  }, [])

  // console.log(result0)
}

{
  // everything done using .reduce().flat().reduce()

  type AuxType1 = {id: string; date: string}

  const result1 = rashData
    .reduce(
      (acc: AuxType1[], curr) => [
        ...acc,
        ...curr.data.skinRash.map(e => ({id: e, date: formatWeekDayTruncated(curr.date)})),
      ],
      []
    )
    .flat()
    .reduce((acc: ResultEntry[], curr) => {
      const lastConcurrency = acc.find(e => e.id === curr.id)

      if (lastConcurrency) {
        return [
          ...acc.filter(e => e.id != lastConcurrency.id),
          {
            id: curr.id,
            date: [curr.date, ...lastConcurrency.date],
          },
        ]
      }
      return [
        ...acc,
        {
          id: curr.id,
          date: [curr.date],
        },
      ]
    }, [])

  //console.log(result1)
}

{
  // everything done using flatMap().reduce() and then Object.entries().forEach()

  type AuxType2 = {
    [key: string]: string[]
  }

  const aux = rashData
    .flatMap(e => {
      const bodyParts = e.data.skinRash.map(bodyPart => ({
        date: e.date,
        id: bodyPart,
      }))

      return bodyParts
    })
    .reduce((acc: AuxType2, curr) => {
      const aux: string[] = []
      if (acc[curr.id] !== undefined) {
        aux.push(`${acc[curr.id]}`)
      }
      return {
        ...acc,
        [curr.id]: [...aux, formatWeekDayTruncated(curr.date)],
      }
    }, {})

  const result1: ResultEntry[] = []

  Object.entries(aux).forEach(([key, value]) =>
    result1.push({
      id: key,
      date: value,
    })
  )

  // console.log(stringify(result1))
}

{
  // everything done getting first all the IDs logged
  // and then using a foreach inside of a map
  const allIdsLogged = removeDuplicates(rashData.map(e => e.data.skinRash).flat())

  const result2 = allIdsLogged.map(id => {
    const obj: ResultEntry = {id, date: []}
    rashData.forEach(e => {
      if (e.data.skinRash.includes(id)) {
        const day = formatWeekDayTruncated(e.date)
        obj.date.push(day)
      }
    })
    return obj
  })

  // console.log(result2)
}

{
  // ✅ this is the one I prefer

  // everything done getting first all the IDs logged
  // and then using a filter and a map when mapping all the ideas

  const allIdsLogged = removeDuplicates(rashData.map(e => e.data.skinRash).flat())

  const result3 = allIdsLogged.map(id => {
    const date = rashData
      .filter(e => e.data.skinRash.includes(id))
      .map(e => formatWeekDayTruncated(e.date))

    return {id, date}
  })

  // console.log(result3)
}
