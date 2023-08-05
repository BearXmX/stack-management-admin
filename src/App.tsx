import { useEffect, useState } from 'react'
import { ConfigProvider, theme as AntdTheme } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routes from '@/router'
import MiddleWareLayout from '@/layout/middleware-layout'
import { useStoreState } from '@/hooks'

const App: React.FC = () => {
  const theme = useStoreState<themeType>(['theme', 'theme'])

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
              return (
                <Route
                  path={item.path}
                  element={<MiddleWareLayout currentPath={item.path as string}>{item.element}</MiddleWareLayout>}
                  key={item.key}
                ></Route>
              )
            })}
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  )
}

export default App
