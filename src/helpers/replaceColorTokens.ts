export function replaceColorTokens(value: string) {
  return value.replace(/<color=[^>]+>/g, "*").replace(/<\/color>/g, "*")
}
