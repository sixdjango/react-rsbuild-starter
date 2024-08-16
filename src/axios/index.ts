import { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { NiceAxiosOptions, createNiceAxios } from 'nice-axios'
import { CacheEnum } from '~/constants/CacheEnum'
import { RoutePathEnum } from '~/constants/RoutePathEnum'

const logout = () => {
  localStorage.setItem(CacheEnum.USER_STORAGE, '{}')
  window.location.href = RoutePathEnum.Login
}

const niceAxiosOptions: NiceAxiosOptions = {
  baseURL: REACT_APP_API_URL,
  headerAuthFieldKey: 'PAI-USER-LOGIN-TOKEN',
  defaultMeta: {
    isOriginalResponse: false,
    isOnlyUnwrapResponseData: false,
    isTokenRequired: true
  },
  getToken: () => {
    const token = Cookies.get(CacheEnum.TOKEN)
    return token || ''
  },
  afterPluginOption: {
    successCode: 'SUCCESS',
    onCatchBusinessError: (code, message, res) => {
      switch (code) {
        case 401:
          logout()
          break
      }
    },
    onCatchAxiosError: (res) => {
      if (typeof res !== 'string') {
        const e = res as AxiosError
        switch (e.response?.status) {
          case 401:
            logout()
            break
        }
      }
    }
  }
}

/**
 * 对账中心axios
 */
export const reconCenterAxios = createNiceAxios({
  ...niceAxiosOptions
})

const niceAxios = createNiceAxios({
  ...niceAxiosOptions,
  defaultMeta: {
    isOriginalResponse: false,
    isOnlyUnwrapResponseData: true,
    isTokenRequired: true
  }
})
