import React, { useEffect, useMemo, useState } from 'react'
import { Breadcrumb, Menu, Switch } from 'antd'
import { BulbOutlined, StarOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { MenuProps } from 'antd'
import { menus } from '@/route'
import { toggleTheme } from '@/store/theme-reducer'
import './index.less'

const Layout: React.FC<{ children: React.ReactNode }> = props => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname)

  const [bread, setBread] = useState<{ title: string }[]>([])

  const theme = useSelector<any>(state => state.theme.theme) as string

  const dispatch = useDispatch()

  const navigate = useNavigate()

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

  /**
   * @description: 点击menu菜单的回调
   */
  const menuClick = (e: { key: string; keyPath: string[] }) => {
    setCurrentPath(e.keyPath[0])
    navigate(e.keyPath[0])
  }

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  useEffect(() => {
    getBreadcrumb()
  }, [window.location.pathname])

  return (
    <div className="my-layout-container">
      <div className="my-layout-container-sider">
        <Menu
          mode="inline"
          style={{ width: '100%', height: '100%' }}
          defaultSelectedKeys={[currentPath]}
          onClick={menuClick}
          defaultOpenKeys={menus.map(item => item.key as string)}
          items={menus as MenuProps['items']}
        />
      </div>
      <div className="my-layout-container-main">
        <div className="my-layout-container-header">
          <div className="my-layout-container-bread">
            <Breadcrumb items={bread}></Breadcrumb>
          </div>
          <div className="my-layout-container-theme">
            <Switch
              checked={theme === 'dark'}
              checkedChildren={<StarOutlined />}
              unCheckedChildren={<BulbOutlined />}
              onChange={() => dispatch(toggleTheme())}
            ></Switch>
          </div>
        </div>
        <div className="my-layout-container-content">{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
