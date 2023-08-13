import { type FilterPattern } from '@rollup/pluginutils'

export type DirectiveConfig = {
  /**
   * module name
   */
  module: string
  /**
   * directives name
   *
   * if `isDefault` is `true`, the first one will be the default
   */
  directive: string | string[]
  /**
   * whether this directive is the default export
   */
  isDefault?: boolean
}[]
export type Directives = string | DirectiveConfig
export type Config = {
  /**
   * directive injects
   *
   * if is `string`, it will directily inject to matched file
   *
   * you can use {@link DirectiveConfig} to better control the inject
   * @example 'import directive from module\nimport { directive } from module'
   */
  directives: Directives
  /**
   * @default [/\.[jt]sx?$/]
   */
  include?: FilterPattern
  /**
   * @default [/node_modules/, /\.git/]
   */
  exclude?: FilterPattern
}
