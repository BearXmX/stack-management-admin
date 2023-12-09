import { Drawer, Button } from 'antd'
import type { DrawerProps, ButtonProps } from 'antd'
import './index.less'

interface PropsType {
  drawerProps: DrawerProps
  onOkBtnProps?: ButtonProps & { text?: React.ReactNode }
  onCancelBtnProps?: ButtonProps & { text?: React.ReactNode }
  children: React.ReactNode
}

const CommonDrawer: React.FC<PropsType> = props => {
  const { drawerProps, onOkBtnProps, onCancelBtnProps } = props

  return (
    <Drawer
      width={drawerProps?.width || 600}
      onClose={() => {
        if (onCancelBtnProps?.onClick) {
          ;(onCancelBtnProps?.onClick as () => void)()
        }
      }}
      footer={
        <div className="default-drawer-footer">
          <Button type="default" {...onCancelBtnProps}>
            {onCancelBtnProps?.text || '取消'}
          </Button>
          <Button type="primary" {...onOkBtnProps}>
            {onOkBtnProps?.text || '确定'}
          </Button>
        </div>
      }
      {...drawerProps}
    >
      {props.children}
    </Drawer>
  )
}

export default CommonDrawer
