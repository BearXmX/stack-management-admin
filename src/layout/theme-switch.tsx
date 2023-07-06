import { Switch } from 'antd'
import { toggleTheme } from '@/store/theme-reducer'
import { BulbOutlined, StarOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

const ThemeSwitch: React.FC = () => {
  const theme = useSelector<any>(state => state.theme.theme) as string

  const dispatch = useDispatch()

  return (
    <Switch
      checked={theme !== 'dark'}
      checkedChildren={<StarOutlined />}
      unCheckedChildren={<BulbOutlined />}
      onChange={() => dispatch(toggleTheme())}
    ></Switch>
  )
}

export default ThemeSwitch
