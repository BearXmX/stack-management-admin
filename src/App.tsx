import { ConfigProvider, theme as AntdTheme } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '@/route'
import { useEffect } from 'react'
import { useStoreState } from './hooks'

const App: React.FC = () => {
  const theme = useStoreState<'dark' | 'light'>(['theme', 'theme'])

  console.log(theme, 'theme')

  useEffect(() => {
    document.documentElement.setAttribute('theme', theme)
  }, [theme])

  return (
    <div className="App">
      <ConfigProvider
        theme={{ token: { colorPrimary: '#00b96b' }, algorithm: theme === 'dark' ? AntdTheme.darkAlgorithm : AntdTheme.defaultAlgorithm }}
      >
        <BrowserRouter>
          <Routes>
            {routes.map(item => {
              return <Route path={item.path} element={item.element} key={item.path}></Route>
            })}
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
