export function textSlicer(text: string, maxchar: number = 60) {
  if (text.length >= maxchar) return `${text.slice(0, maxchar)}...`;
  return text;
}
