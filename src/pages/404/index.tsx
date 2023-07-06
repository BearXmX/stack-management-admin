import { Result } from 'antd'

const PageNotFound: React.FC = () => {
  return (
    <div style={{ height: '100%' }}>
      <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
    </div>
  )
}

export default PageNotFound
