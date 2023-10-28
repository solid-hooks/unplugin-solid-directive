import { describe, expect, it } from 'vitest'
import type { DirectiveMap } from 'src/core'
import { generateInjects, matchSolidDirectiveStatements } from '../src/core/utils'

describe('matchUseStatements', () => {
  it('should return an empty array when there are no use statements', () => {
    const str = 'Some string without use statements'
    const result = matchSolidDirectiveStatements(str)
    expect(result).toEqual([])
  })

  it('should return an array of use statements', () => {
    const str = '_$use(Statement1,\n_$use(Statement2,\n_$use(Statement3,'
    const result = matchSolidDirectiveStatements(str)
    expect(result).toEqual(['Statement1', 'Statement2', 'Statement3'])
  })

  it('should ignore invalid use statements', () => {
    const str = '_$use(Statement1,\n_$use(Statement2\n_$use(Statement3,'
    const result = matchSolidDirectiveStatements(str)
    expect(result).toEqual(['Statement1', 'Statement3'])
  })
})

describe('generateInjects', () => {
  it('should generate imports for inject directives', () => {
    const code = `
      _$use(test, a)
      _$use(query, a)
    `
    const injectDirective: DirectiveMap = new Map([
      ['test', { from: 'test', isDefault: true }],
      ['query', { from: 'query' }],
    ])

    const result = generateInjects(code, injectDirective)

    expect(result).toContain('import test from "test"\n')
    expect(result).toContain('import { query } from "query"\n')
  })

  it('should handle multiple inject directives from the same module', () => {
    const code = `
      _$use(test1, a)
      _$use(test2, a)
    `
    const injectDirective: DirectiveMap = new Map([
      ['test1', { from: 'test' }],
      ['test2', { from: 'test' }],
    ])

    const result = generateInjects(code, injectDirective)

    expect(result).toContain('import { test1, test2 } from "test"\n')
  })

  it('should not include imports for directives that are not present in the code', () => {
    const code = `
      _$use(test, a)
    `
    const injectDirective: DirectiveMap = new Map([
      ['noop', { from: 'noop' }],
    ])

    const result = generateInjects(code, injectDirective)

    expect(result).not.toContain('import { noop } from "noop"\n')
  })
})
