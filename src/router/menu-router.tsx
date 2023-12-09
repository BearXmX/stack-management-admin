import Layout from '@/layout'
import { MailOutlined } from '@ant-design/icons'

function flatLayoutMenuRoutes() {
  const routes: routeProps[] = []

  function flat(layoutList: routeProps[]) {
    layoutList.forEach(item => {
      if (!!item.path && item.types === 'menu') {
        routes.push(item)
      }

      if (Array.isArray(item.routes) && item.types === 'subMenu') {
        flat(item.routes)
      }
    })
  }

  flat(siderMenus)

  return routes
}

export const siderMenus: routeProps[] = [
  {
    types: 'subMenu',
    key: '/cockpit',
    label: '驾驶舱',
    icon: <MailOutlined />,
    routes: [
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
    routes: [
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
  {
    types: 'subMenu',
    key: '/user',
    label: '用户中心',
    icon: <MailOutlined />,
    routes: [
      {
        types: 'menu',
        key: '/user/user-1',
        path: '/user/user-1',
        label: '用户中心-1',
        element: (
          <Layout>
            <div>用户中心-1</div>
          </Layout>
        ),
      },
      {
        types: 'menu',
        key: '/user/user-2',
        path: '/user/user-2',
        label: '用户中心-2',
        element: (
          <Layout>
            <div>用户中心-2</div>
          </Layout>
        ),
      },
    ],
  },
]

const flatMenuRoutes = flatLayoutMenuRoutes()

export default flatMenuRoutes
