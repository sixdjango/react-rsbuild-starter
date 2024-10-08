import { IconHome } from '@douyinfe/semi-icons'
import { NavItems } from '@douyinfe/semi-ui/lib/es/navigation'
import { deepReduce } from '@yc-tech/shared'
import { ReactNode } from 'react'
import { Route } from 'react-router-dom'
import { RoutePathEnum } from '~/constants/RoutePathEnum'
import { AdminLayout } from '~/layouts/AdminLaout'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { HomePage } from '~/pages/home'
import { LoginPage } from '~/pages/login'

interface RouteMeta {
  title?: string
  hidden?: boolean
  auth?: boolean
  activeMenu?: string
  icon?: ReactNode
  ignoreMenu?: boolean
  hideHeader?: boolean
}
export interface RouteConfig {
  path: string
  key?: string
  element: React.ReactNode
  children?: RouteConfig[]
  redirect?: string
  meta: RouteMeta
}

const routeList: RouteConfig[] = [
  {
    path: '/admin',
    element: <AdminLayout />,
    key: 'Admin',
    meta: {
      title: 'Admin',
      ignoreMenu: true
    },
    children: [
      {
        path: '/admin/home',
        element: <HomePage />,
        key: 'Home',
        meta: {
          title: 'Home',
          icon: <IconHome size="large" />
        }
      }
    ]
  },
  {
    path: '/',
    element: <DefaultLayout />,
    meta: {
      ignoreMenu: true
    },
    children: [
      {
        path: RoutePathEnum.Login,
        element: <LoginPage />,
        meta: {}
      }
    ]
  }
]

// TODO: 生成子菜单列表
const menuList = deepReduce<RouteConfig, NavItems>(
  routeList,
  (acc, route) => {
    if (route.meta?.ignoreMenu) return acc

    acc.push({
      itemKey: route.path,
      text: route.meta.title,
      icon: route.meta.icon
    })
    return acc
  },
  [],
  'children'
)

export const getMenuList = () => {
  return menuList
}

export const getRoutes = () => {
  return routeList
}

interface AuthRouteProps {
  children?: React.ReactNode
  auth?: boolean
  path: string
  title?: string
}

export function AuthRoute({ children }: AuthRouteProps) {
  return children
}

export function GenerateRoutes(routes: RouteConfig[]) {
  return routes.map((route) => {
    const { children, path, key, ...rest } = route
    return (
      <Route
        key={path}
        path={path}
        {...rest}
        element={
          <AuthRoute path={path} auth={rest.meta?.auth} title={rest.meta?.title}>
            {rest.element}
          </AuthRoute>
        }>
        {!!children && GenerateRoutes(children)}
      </Route>
    )
  })
}

export const StaticRouters = GenerateRoutes(routeList)
