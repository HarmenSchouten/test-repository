export function greet(name?: string): string {
  const who = name?.trim() || 'world'
  return `Hello, ${who}!`
}
