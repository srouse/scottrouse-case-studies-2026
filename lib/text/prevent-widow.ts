export function preventWidow(text: string): string {
  return text.replace(/\s+(\S+)\s*$/, "\u00A0$1");
}
