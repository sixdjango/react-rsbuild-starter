import { useState } from 'react'
import { clientPai } from '~/axios'

export function useTranslate(onChange: (value: string) => void) {
  const [translateLoading, setTranslateLoading] = useState(false)
  const translate = async (orgId: string, words: string) => {
    if (!words) return
    try {
      setTranslateLoading(true)
      const res = await clientPai.polishChasingWordsUsingPost({
        orgId,
        chasingWords: words
      })

      if (res.data) onChange(res.data)
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      setTranslateLoading(false)
    }
  }

  return { translate, translateLoading }
}
