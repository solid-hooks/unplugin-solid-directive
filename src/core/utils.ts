import type { DirectiveMap } from '.'

export function matchSolidDirectiveStatements(str: string): string[] {
  const matches = []

  for (const match of str.matchAll(/_\$use\((\w+),/g)) {
    if (match[1]) {
      matches.push(match[1])
    }
  }

  return matches
}

export function generateInjects(
  code: string,
  injectDirective: DirectiveMap,
): string {
  const modules: Record<string, { directives: string[], isDefault?: boolean }> = {}
  for (const directive of matchSolidDirectiveStatements(code)) {
    if (injectDirective.has(directive)) {
      const { from, isDefault } = injectDirective.get(directive)!
      if (modules[from]) {
        modules[from]!.directives.push(directive)
        modules[from]!.isDefault = isDefault
      } else {
        modules[from] = { directives: [directive], isDefault }
      }
    }
  }
  return Object.entries(modules)
    .map(([module, { directives, isDefault }]) =>
      `import ${isDefault ? directives[0] : `{ ${directives.join(', ')} }`} from "${module}"\n`,
    )
    .join('')
}
