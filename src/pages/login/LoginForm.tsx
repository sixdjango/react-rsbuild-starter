import { AtForm, AtFormApi, Button, Checkbox } from '@yc-tech/react-component'
import { useRef, useState } from 'react'
import waving_hand from '~/assets/imgs/waving-hand.svg'

type LoginFormProps = {
  onSubmit?: () => void
  onRegister?: () => void
}

export function LoginForm({ onRegister }: LoginFormProps) {
  const [remember, setRemember] = useState(false)
  const formApi = useRef<AtFormApi>()

  const onSubmit = async () => {
    await formApi.current?.validate()
  }

  return (
    <>
      <h1 className="text-xl font-medium text-text-0 mb-2">请登录你的账号</h1>
      <h2 className="text-sm text-text-1 mb-8 flex items-center gap-2">
        <img src={waving_hand} className="w-4 h-4" />
        欢迎回来
      </h2>
      <AtForm getFormApi={(e) => (formApi.current = e)}>
        <AtForm.Input
          label="账号"
          field="username"
          placeholder="请输入账号"
          rules={[{ required: true }]}
        />
        <AtForm.Input
          label="密码"
          field="password"
          mode="password"
          placeholder="请输入密码"
          rules={[{ required: true }]}
        />
      </AtForm>
      <div className="flex justify-end gap-2 mt-2">
        <Checkbox value={remember} onChange={(e) => setRemember(!!e.target.checked)}>
          <span className="text-sm">记住账号</span>
        </Checkbox>
      </div>
      <Button className="mt-4" type="primary" theme="solid" onClick={onSubmit}>
        登录
      </Button>
      <div className="text-xs text-center mt-4">
        <span>还没有账号？</span>
        <span className="text-primary cursor-pointer" onClick={onRegister}>
          立即注册
        </span>
      </div>
    </>
  )
}
