export function validateEmail(value: string) {
  return /@/.test(value)
}
