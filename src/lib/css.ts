export function cssClamp(min: string, preferred: string, max: string) {
  return `clamp(${min}, ${preferred}, ${max})`;
}
