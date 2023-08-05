import React, { useEffect, useMemo, useState } from 'react'
import { Breadcrumb } from 'antd'
import { AlignRightOutlined } from '@ant-design/icons'

import Sider from '@/layout/sider'
import DrawerMenu from '@/layout/drawer-menu'
import ThemeSwitch from '@/components/theme-switch'
import { siderMenus } from '@/router/menu-router'

import './index.less'

const Layout: React.FC<{ children: React.ReactNode }> = props => {
  const [bread, setBread] = useState<{ title: string }[]>([])

  const [showDrawer, setShowDrawer] = useState<boolean>(false)

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const menuList = useMemo(() => {
    // 递归增加面包屑
    function deep(list: routeProps[], breadList: { title: string }[]): routeProps[] {
      return list.map<routeProps[][0]>(item => {
        const currentBread = [
          ...breadList,
          {
            title: item.label as string,
          },
        ]
        return {
          ...item,
          breadList: currentBread,
          routes: Array.isArray(item.routes) ? deep(item.routes, currentBread) : undefined,
        }
      })
    }

    const breadList = deep(siderMenus, [])

    // 平铺后的数据
    const flatList: routeProps[] = []

    function flat(list: routeProps[]) {
      list.forEach(item => {
        flatList.push(item)

        if (!!item.routes) {
          flat(item.routes)
        }
      })
    }

    flat(breadList)

    return [[...breadList], [...flatList]]
  }, [])

  const getBreadcrumb = () => {
    setBread(menuList[1].find(item => item.path === window.location.pathname)?.breadList!)
  }

  const initLayout = () => {
    if (window.innerWidth > 750) {
      setShowDrawer(false)
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    getBreadcrumb()
  }, [window.location.pathname])

  useEffect(() => {
    initLayout()

    window.addEventListener('resize', function () {
      initLayout()
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
        <div className="my-layout-container-content"> {props.children}</div>
        {showDrawer && <DrawerMenu onClose={() => setShowDrawer(false)}></DrawerMenu>}
      </div>
    </div>
  )
}

export default Layout
