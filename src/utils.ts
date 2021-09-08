import enUSLocale, {parseISO, format} from 'date-fns'

const locale = {locale: enUSLocale}

export const stringify = (value: any) => JSON.stringify(value, null, 2)

export function upperCaseFirstLetter(s: string): string
export function upperCaseFirstLetter(s?: undefined): undefined
export function upperCaseFirstLetter(s?: string) {
  return s && s.charAt(0).toUpperCase() + s.slice(1)
}

const parseDate = (date: Date | string): Date => (typeof date === 'string' ? parseISO(date) : date)

export const formatWeekDay = (date: Date | string) => format(parseDate(date), 'cccc', locale)

export const formatWeekDayTruncated = (date: Date | string) =>
  upperCaseFirstLetter(format(parseDate(date), 'ccc', locale))
