import { ConfigProvider, theme as AntdTheme } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from '@/route'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const App: React.FC = () => {
  const theme = useSelector<any>(state => state.theme.theme) as string

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
