import { loadEnv } from '@rsbuild/core'
import { z } from 'zod'
const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] })
const processPblVars: Record<string, string> = {}

Object.keys(publicVars).forEach((key) => {
  // 去除 process.env. 前缀，在 define 中使用。这样在前端使用时可以不用加 process.env. 前缀
  if (key.startsWith('process.env.')) {
    processPblVars[key.replace('process.env.', '')] = publicVars[key] || ''
  }
})

const proxy = JSON.parse(process.env.RSBUILD_PROXY || '[]').reduce(
  (pre: Record<string, string>, acc: string[]) => {
    pre[acc[0]] = acc[1]
    return pre
  },
  {}
)

const envConfigSchema = z.object({
  envModel: z.enum(['development', 'production']),
  port: z.number(),
  proxy: z.record(z.string())
})

const processEnv = {
  envModel: process.env.NODE_ENV,
  port: Number(process.env.PORT),
  proxy
}

const envConfig = envConfigSchema.safeParse(processEnv)

if (envConfig.success === false) {
  console.error('❌ Invalid environment variables:', envConfig.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables')
}

export default envConfig.data

export { processPblVars }
