export function greet(...names: string[]): string {
  const list = names.map((n) => n.trim()).filter((n) => n !== '')
  if (list.length === 0) list.push('world')
  const who =
    list.length === 1
      ? list[0]
      : `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`
  return `Hello, ${who}!`
}
