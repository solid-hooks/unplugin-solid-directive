export function matchUseStatements(str: string): string[] {
  const matches = []

  for (const match of str.matchAll(/_\$use\((\w+),/g)) {
    match[1] && matches.push(match[1])
  }

  return matches
}

export function generateInjects(
  code: string,
  injectDirective: Map<string, { module: string; isDefault?: boolean | undefined }>,
): string {
  const modules: Record<string, { directives: string[]; isDefault?: boolean }> = {}
  for (const directive of matchUseStatements(code)) {
    if (injectDirective.has(directive)) {
      const { module, isDefault } = injectDirective.get(directive)!
      if (modules[module]) {
        modules[module]!.directives.push(directive)
        modules[module]!.isDefault = isDefault
      } else {
        modules[module] = { directives: [directive], isDefault }
      }
    }
  }
  return Object.entries(modules)
    .map(([module, { directives, isDefault }]) =>
      `import ${isDefault ? directives[0] : `{ ${directives.join(', ')} }`} from "${module}"\n`)
    .join('')
}
