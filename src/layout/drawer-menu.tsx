import Sider from './sider'
import CommonDrawer from '@/components/common-drawer'
import ThemeSwitch from '@/components/theme-switch'

import { useNavigate } from 'react-router-dom'

interface DrawerMenuProps {
  onClose: () => void
}

const DrawerMenu: React.FC<DrawerMenuProps> = props => {
  const go = useNavigate()

  return (
    <CommonDrawer
      drawerProps={{
        open: true,
        width: 300,
        title: <ThemeSwitch />,
      }}
      onCancelBtnProps={{
        onClick: () => {
          props.onClose()
        },
      }}
      onOkBtnProps={{
        text: '登出',
        onClick: () => {
          go('/login')
        },
      }}
    >
      <Sider position="drawer"></Sider>
    </CommonDrawer>
  )
}

export default DrawerMenu
