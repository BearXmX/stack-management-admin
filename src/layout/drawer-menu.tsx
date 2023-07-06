import { Drawer } from 'antd'
import Sider from './sider'
import ThemeSwitch from './theme-switch'

interface DrawerMenuProps {
  onClose: () => void
}

const DrawerMenu: React.FC<DrawerMenuProps> = props => {
  return (
    <Drawer open width={300} title={<ThemeSwitch />} onClose={props.onClose} footer={null}>
      <Sider position="drawer"></Sider>
    </Drawer>
  )
}

export default DrawerMenu
