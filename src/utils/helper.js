export function StringConcat(text, total) {
  return text.length > total ? text.slice(0, total) + "..." : text;
}
