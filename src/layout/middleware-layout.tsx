import { useEffect } from 'react'

interface MiddleWareLayoutProps {
  currentPath: string
  children: React.ReactNode
}

const MiddleWareLayout: React.FC<MiddleWareLayoutProps> = props => {
  useEffect(() => {
    console.log(props.currentPath)
  }, [props.currentPath])

  return <>{props.children}</>
}

export default MiddleWareLayout
