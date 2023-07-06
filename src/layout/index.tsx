import React, { useEffect, useMemo, useState } from 'react'
import { Breadcrumb } from 'antd'
import { AlignRightOutlined } from '@ant-design/icons'
import { menus } from '@/route'
import './index.less'

import Sider from './sider'
import DrawerMenu from './drawer-menu'
import ThemeSwitch from './theme-switch'

const Layout: React.FC<{ children: React.ReactNode }> = props => {
  const [bread, setBread] = useState<{ title: string }[]>([])

  const [showDrawer, setShowDrawer] = useState<boolean>(false)

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const menuList = useMemo(() => {
    // 递归增加面包屑
    function deep(list: typeof menus, breadList: { title: string }[]): typeof menus {
      return list.map<(typeof menus)[0]>(item => {
        const currentBread = [
          ...breadList,
          {
            title: item.label as string,
          },
        ]
        return {
          ...item,
          breadList: currentBread,
          children: Array.isArray(item.children) ? deep(item.children, currentBread) : undefined,
        }
      })
    }

    const breadList = deep(menus, [])

    // 平铺后的数据
    const flatList: typeof menus = []

    function flat(list: typeof menus) {
      list.forEach(item => {
        flatList.push(item)

        if (!!item.children) {
          flat(item.children)
        }
      })
    }

    flat(breadList)

    return [[...breadList], [...flatList]]
  }, [])

  const getBreadcrumb = () => {
    setBread(menuList[1].find(item => item.path === window.location.pathname)?.breadList!)
  }

  useEffect(() => {
    getBreadcrumb()
  }, [window.location.pathname])

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth > 750) {
        setShowDrawer(false)
        setShowMenu(true)
      } else {
        setShowMenu(false)
      }
    })

    return () => {
      window.removeEventListener('resize', function () {})
    }
  }, [])

  return (
    <div className="my-layout-container">
      {showMenu && <div className="my-layout-container-sider">{<Sider position="outside"></Sider>}</div>}
      <div className="my-layout-container-main">
        <div className="my-layout-container-header">
          <div className="my-layout-container-bread">
            <Breadcrumb items={bread}></Breadcrumb>
          </div>
          <div className="my-layout-container-theme">
            <ThemeSwitch></ThemeSwitch>
          </div>
          <div
            className="my-layout-container-drawer-control"
            onClick={() => {
              setShowDrawer(true)
            }}
          >
            <AlignRightOutlined />
          </div>
        </div>
        <div className="my-layout-container-content">{props.children}</div>
        {showDrawer && <DrawerMenu onClose={() => setShowDrawer(false)}></DrawerMenu>}
      </div>
    </div>
  )
}

export default Layout
