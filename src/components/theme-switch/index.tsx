import { Switch } from 'antd'
import { toggleTheme } from '@/store/theme-reducer'
import { useDispatch } from 'react-redux'
import { useStoreState } from '@/hooks'
import IconComponent from '@/components/icon-component'

const ThemeSwitch: React.FC = () => {
  const theme = useStoreState<themeType>(['theme', 'theme'])

  const dispatch = useDispatch()

  return (
    <Switch
      checked={theme === 'light'}
      checkedChildren={<IconComponent type="icon-guandeng" style={{ transform: 'scale(2.8)' }} />}
      unCheckedChildren={<IconComponent type="icon-kaideng" style={{ transform: 'scale(2.8)' }} />}
      onChange={() =>
        dispatch(
          toggleTheme({
            theme: theme === 'light' ? 'dark' : 'light',
          })
        )
      }
    ></Switch>
  )
}

export default ThemeSwitch
