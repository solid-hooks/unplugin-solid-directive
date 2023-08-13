import { type FilterPattern } from '@rollup/pluginutils'

export type DirectiveConfig = {
  /**
   * module name
   */
  module: string
  /**
   * directives name, it wll auto match the usage in file
   *
   * if `isDefault` is `true`, the first one will be the default
   */
  directive: string | string[]
  /**
   * whether this directive is the default export
   */
  isDefault?: boolean
}[]
export type Config = {
  /**
   * directive injects
   *
   * if is `string`, it will directily inject to matched file
   *
   * you can use {@link DirectiveConfig} to better control the inject
   * @example
   * string:
   * ```
   * 'import directive from module\nimport { directive } from module'
   * ```
   * @example
   * DirectiveConfig:
   * ```ts
   * [
   *   {
   *     directive: 'directive',
   *     module: 'module',
   *   },
   * ],
   * ```
   * the generated inject will be:
   * ```ts
   * import { directive } from 'module'
   * ```
   */
  directives: string | DirectiveConfig
  /**
   * transform file path include pattern
   * @default [/\.[jt]sx?$/]
   */
  include?: FilterPattern
  /**
   * transform file path exclude pattern
   * @default [/node_modules/, /\.git/]
   */
  exclude?: FilterPattern
}
