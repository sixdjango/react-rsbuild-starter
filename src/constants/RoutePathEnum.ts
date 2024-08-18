import { OriginRoutePathEnum } from './OriginRoutePathEnum'

export const RoutePathEnum = {
  ...OriginRoutePathEnum
}

type RoutePathEnumKey = keyof typeof RoutePathEnum & string
const keys = Object.keys(RoutePathEnum) as RoutePathEnumKey[]
keys.forEach((key: RoutePathEnumKey) => {
  RoutePathEnum[key] = `${RoutePathEnum[key]}`
})
