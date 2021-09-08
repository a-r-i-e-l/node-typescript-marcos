export const skinRashFrontBodyParts = [
  'trunk',
  'rightUpperArmInside',
  'leftUpperArmInside',
  'rightLowerArmInside',
  'leftLowerArmInside',
  'leftLowerLegFront',
  'leftUpperLegFront',
  'rightUpperLegFront',
  'headAndNeckFront',
  'leftPalmOfHand',
  'rightPalmOfHand',
  'rightLowerLegFront',
  'leftTopOfFoot',
  'rightTopOfFoot',
] as const

export const skinRashBackBodyParts = [
  'back',
  'leftSoleOfFoot',
  'rightSoleOfFoot',
  'leftUpperLegBack',
  'rightUpperLegBack',
  'rightUpperArmOutside',
  'rightLowerArmOutside',
  'leftUpperArmOutside',
  'leftLowerArmOutside',
  'rightLowerLegBack',
  'leftLowerLegBack',
  'leftBackOfHand',
  'rightBackOfHand',
  'headAndNeckBack',
] as const

export type SkinRashBackBodyPart = typeof skinRashBackBodyParts[number]
export type SkinRashFrontBodyPart = typeof skinRashFrontBodyParts[number]

export type IAPISkinRash = SkinRashBackBodyPart | SkinRashFrontBodyPart
