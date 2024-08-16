import { create } from 'zustand'
import { combine, createJSONStorage, persist } from 'zustand/middleware'
import { CacheEnum } from '~/constants/CacheEnum'

export interface UserState {
  state: {
    token: string
    pinvoIoToken: string
    userInfo?: {
      userId: string
    }
  }
  version: string
}

/**
 * @file userStore.ts
 * @description combine：自动推断返回值类型 persist：持久化
 * @author django
 * @date 2023-08-19
 */
const useUserStore = create(
  persist(
    combine({ token: '', pinvoIoToken: '', userInfo: { userId: '' } }, (set) => ({
      setToken: (v: string) => set((state) => ({ token: v })),
      setUserInfo: (v: any) => set((state) => ({ userInfo: v })),
      setPinvoIoToken: (v: string) => set((state) => ({ pinvoIoToken: v }))
    })),
    { name: CacheEnum.USER_STORAGE, storage: createJSONStorage(() => localStorage) }
  )
)

export { useUserStore }
