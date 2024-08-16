import { defineConfig } from '@rsbuild/core'
import { pluginLess } from '@rsbuild/plugin-less'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'
import envConfig, { processPblVars } from './env'

export default defineConfig({
  server: {
    proxy: envConfig.proxy,
    port: envConfig.port
  },
  source: {
    alias: {
      '~': './src'
    },
    define: processPblVars
  },
  plugins: [pluginReact(), pluginLess(), pluginSass()],
  tools: {}
})
