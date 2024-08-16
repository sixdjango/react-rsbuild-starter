import { createConsola } from 'consola'
import { isProdMode } from '~/config'

export const consola = createConsola({
  level: isProdMode() ? 0 : 4
})
