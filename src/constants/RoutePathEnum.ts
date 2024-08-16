import { OriginRoutePathEnum } from './OriginRoutePathEnum'

export const RoutePathEnum = {
  ...OriginRoutePathEnum
}

type RoutePathEnumKey = keyof typeof RoutePathEnum & string
const keys = Object.keys(RoutePathEnum) as RoutePathEnumKey[]
keys.forEach((key: RoutePathEnumKey) => {
  // ts-ignore: 无法识别
  RoutePathEnum[key] = `${RoutePathEnum[key]}`
})
