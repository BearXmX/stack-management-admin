import { Navigate } from 'react-router-dom'
import { MailOutlined } from '@ant-design/icons'
import Layout from '../layout'
import PageNotFound from '../pages/404'

type routeProps = Partial<{
  types: 'subMenu' | 'menu' | 'speciaRoute'
  label: string
  key: string
  children: routeProps[]
  path: string
  element: JSX.Element
  icon: React.ReactNode
  breadList: { title: string }[]
}>

export const menus: routeProps[] = [
  {
    types: 'subMenu',
    key: '/cockpit',
    label: '驾驶舱',
    icon: <MailOutlined />,
    children: [
      {
        types: 'menu',
        key: '/cockpit/cockpit-1',
        path: '/cockpit/cockpit-1',
        label: '驾驶舱-1',
        element: (
          <Layout>
            <div>驾驶舱-1</div>
          </Layout>
        ),
      },
      {
        types: 'menu',
        key: '/cockpit/cockpit-2',
        path: '/cockpit/cockpit-2',
        label: '驾驶舱-2',
        element: (
          <Layout>
            <div>驾驶舱-2</div>
          </Layout>
        ),
      },
    ],
  },
  {
    types: 'subMenu',
    key: '/goods',
    label: '商品列表',
    icon: <MailOutlined />,
    children: [
      {
        types: 'menu',
        key: '/goods/goods-1',
        path: '/goods/goods-1',
        label: '商品列表-1',
        element: (
          <Layout>
            <div>商品列表-1</div>
          </Layout>
        ),
      },
      {
        types: 'menu',
        key: '/goods/goods-2',
        path: '/goods/goods-2',
        label: '商品列表-2',
        element: (
          <Layout>
            <div>商品列表-2</div>
          </Layout>
        ),
      },
    ],
  },
]

function flatLayoutMenuRoutes() {
  const routes: routeProps[] = []

  function flat(layoutList: routeProps[]) {
    layoutList.forEach(item => {
      if (!!item.path && item.types === 'menu') {
        routes.push(item)
      }

      if (Array.isArray(item.children) && item.types === 'subMenu') {
        flat(item.children)
      }
    })
  }

  flat(menus)

  return routes
}

export const flatRoutes = flatLayoutMenuRoutes()

const speciaRoute: routeProps[] = [
  {
    path: '/',
    key: '/',
    types: 'speciaRoute',
    element: <Navigate to={flatRoutes[0].path as string} />,
  },
  {
    path: '*',
    key: '*',
    types: 'speciaRoute',
    element: <PageNotFound />,
  },
]

export default [...flatRoutes, ...speciaRoute]
