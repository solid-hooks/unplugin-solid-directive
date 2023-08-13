import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { Config } from '../type'
import { generateInjects } from './utils'

export default createUnplugin((config: Config) => {
  const {
    directives,
    include = [/\.tsx?$/],
    exclude = [/node_modules/, /\.git/],
  } = config
  let injectDirective: string | Map<string, { module: string; isDefault?: boolean }> = new Map()
  if (typeof directives === 'string') {
    injectDirective = directives
  } else {
    for (let { directive, module, isDefault } of directives) {
      for (const d of Array.isArray(directive) ? directive : [directive]) {
        injectDirective.set(d, { module, isDefault })
      }
    }
  }
  const filter = createFilter(include, exclude)
  return {
    name: 'unplugin-solid-directive',
    enforce: 'pre',
    transformInclude(id) {
      return filter(id)
    },
    transform(code) {
      if (typeof injectDirective === 'string') {
        return `${injectDirective}\n${code}`
      }
      const injects = generateInjects(
        code,
        injectDirective,
      )
      return `${injects}\n${code}`
    },
  }
})