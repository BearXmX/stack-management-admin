import { Button, Form, Input } from 'antd'
import ThemeSwitch from '@/components/theme-switch'

import loginMaskImage from '@/assets/image/login-mask-image.png'

import { useNavigate } from 'react-router-dom'

import './index.less'

interface PropsType {}

interface loginParams {
  username: string
  password: string | number
}

const Login: React.FC<PropsType> = props => {
  const go = useNavigate()

  const onFinish = (values: loginParams) => {
    console.log('Success:', values)
    go('/')
  }

  return (
    <div className="login-page flex-center">
      <div className="login-page-container flex-space-between">
        <div className="login-page-mask">
          <h2 className="login-page-mask-title">welcome</h2>
          <div className="login-mask-across"></div>
          <div className="login-page-mask-image">
            <img src={loginMaskImage} alt="" />
          </div>
          {Array(6)
            .fill(null)
            .map((item, index) => {
              return <div className="login-mask-radiu" key={index}></div>
            })}
        </div>
        <div className="login-page-form-container">
          <div className="login-page-theme-container">
            <ThemeSwitch></ThemeSwitch>
          </div>
          <div className="login-form-container flex-center">
            <div className="login-form">
              <h2 className="login-form-title">登录</h2>
              <div className="login-form-across"></div>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ username: 'username', password: 'password' }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
                  <Input placeholder="请输入账号" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                  <Button style={{ width: 80 }} type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
