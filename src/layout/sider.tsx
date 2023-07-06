import React, { useState } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { menus } from '@/route'

interface SiderProps {
  position: 'drawer' | 'outside'
}

const Sider: React.FC<SiderProps> = props => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname)

  const navigate = useNavigate()

  /**
   * @description: 点击menu菜单的回调
   */
  const menuClick = (e: { key: string; keyPath: string[] }) => {
    setCurrentPath(e.keyPath[0])
    navigate(e.keyPath[0])
  }

  return (
    <Menu
      mode="inline"
      style={{ width: '100%', height: '100%' }}
      defaultSelectedKeys={[currentPath]}
      onClick={menuClick}
      defaultOpenKeys={menus.map(item => item.key as string)}
      items={menus as MenuProps['items']}
      className={props.position === 'drawer' ? 'my-layout-container-drawerSider' : undefined}
    />
  )
}

export default Sider
