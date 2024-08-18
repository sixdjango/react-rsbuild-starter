import logo from '~/assets/imgs/logo.webp'
import waving_hand from '~/assets/imgs/waving-hand.svg'
import { Banner, Button, Form } from '@yc-tech/react-component'
import { useRef } from 'react'
import { FormApi } from '@douyinfe/semi-ui/lib/es/form'

export function LoginPage() {
  const formApi = useRef<FormApi>()
  const changeVisible = () => {
    console.log('changeVisible')
  }

  const onSubmit = async () => {
    await formApi.current?.validate()
  }
  return (
    <div className="flex flex-col items-center justify-center h-full bg-fill-0">
      <Banner
        onClose={changeVisible}
        description="xx系统是为了 xx 而生的，为 xx 提供了一整套 xx 解决方案，欢迎使用。用问题请联系：admin"
        className="fixed top-0 w-full left-0"
      />
      <div className="flex items-center shadow-md">
        {/* left logo */}
        <div className="h-[460px] bg-[#040e2a] w-[260px] items-center flex rounded-l-md">
          <img src={logo} className="object-cover w-full" />
        </div>
        {/* right form */}
        <div className="h-[460px] w-[360px] rounded-r-md bg-white px-6 flex flex-col justify-center">
          <h1 className="text-xl font-medium text-text-0 mb-2">请登录你的账号</h1>
          <h2 className="text-sm text-text-1 mb-8 flex items-center gap-2">
            <img src={waving_hand} className="w-4 h-4" />
            欢迎回来
          </h2>
          <Form getFormApi={(e) => (formApi.current = e)}>
            <Form.Input
              label="账号"
              field="username"
              placeholder="请输入账号"
              rules={[{ required: true }]}
            />
            <Form.Input
              label="密码"
              field="password"
              mode="password"
              placeholder="请输入密码"
              rules={[{ required: true }]}
            />
          </Form>
          <Button className="mt-4" type="primary" theme="solid" onClick={onSubmit}>
            登录
          </Button>
          <div className="text-xs text-center mt-4">
            <span>还没有账号？请联系：</span>
            <span className="text-primary">admin@platform.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
