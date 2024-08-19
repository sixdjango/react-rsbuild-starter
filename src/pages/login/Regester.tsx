import { AtForm, AtFormApi, Button } from '@yc-tech/react-component'
import { useRef } from 'react'

type RegisterFormProps = {
  onSignIn?: () => void
}

export function RegisterForm({ onSignIn }: RegisterFormProps) {
  const formApi = useRef<AtFormApi>()
  const onSubmit = async () => {
    await formApi.current?.validate()
  }
  return (
    <>
      <h1 className="text-xl font-medium text-text-0 mb-4">注册账号</h1>
      <AtForm getFormApi={(e) => (formApi.current = e)}>
        <AtForm.Input
          field="phone"
          label="手机号"
          placeholder="请输入用户名"
          rules={[{ required: true }]}
        />
        <AtForm.Input
          field="password"
          label="密码"
          placeholder="请输入密码"
          rules={[{ required: true }]}
        />
        <AtForm.Input
          field="confirmPassword"
          label="确认密码"
          placeholder="请再次输入密码"
          rules={[{ required: true }]}
        />
      </AtForm>
      <Button className="mt-4" theme="solid" type="primary" onClick={onSubmit}>
        注册
      </Button>
      <div className="text-xs text-center mt-4">
        <span>已有账号？</span>
        <span className="text-primary cursor-pointer" onClick={onSignIn}>
          立即登录
        </span>
      </div>
    </>
  )
}
