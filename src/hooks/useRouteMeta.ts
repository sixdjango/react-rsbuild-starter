import { findDeep } from '@yc-tech/shared'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { RouteConfig, getRoutes } from '~/router'

export function useRouteConfig() {
  const [route, setRoute] = useState<RouteConfig>()
  const location = useLocation()

  useEffect(() => {
    const routes = getRoutes()
    const route = findDeep(routes, (e) => e.path === location.pathname, 'children')
    setRoute(route)
  }, [location])

  return { route }
}
