import logo from '~/assets/imgs/logo.webp'

import { Banner } from '@yc-tech/react-component'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './Regester'
import { useState } from 'react'

export function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center h-full bg-fill-0">
      <Banner
        description="xx系统是为了 xx 而生的，为 xx 提供了一整套 xx 解决方案，欢迎使用。用问题请联系：admin"
        className="fixed top-0 w-full left-0"
      />
      <div className="flex items-center shadow-md">
        {/* left logo */}
        <div className="h-[500px] bg-[#040e2a] w-[320px] items-center flex rounded-l-md">
          <img src={logo} className="object-cover w-full" />
        </div>
        {/* right form */}
        <div className="h-[500px] w-[380px] rounded-r-md bg-white px-9 flex flex-col justify-center">
          {!isRegister ? (
            <LoginForm onRegister={() => setIsRegister(true)} />
          ) : (
            <RegisterForm onSignIn={() => setIsRegister(false)} />
          )}
        </div>
      </div>
    </div>
  )
}
