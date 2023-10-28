import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { generateInjects } from './utils'
import type { Config } from './types'

export type DirectiveMap = Map<string, {
  from: string
  isDefault?: boolean
}>
export default createUnplugin((config: Config) => {
  const {
    directives,
    include = [/\.tsx?$/],
    exclude = [/node_modules/, /\.git/],
  } = config

  let injectDirective: string | DirectiveMap = new Map()
  if (typeof directives === 'string') {
    injectDirective = directives
  } else {
    for (let { imports, from, isDefault } of directives) {
      for (const d of Array.isArray(imports) ? imports : [imports]) {
        injectDirective.set(d, { from, isDefault })
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
      const injects = generateInjects(code, injectDirective)
      return `${injects}\n${code}`
    },
  }
})
