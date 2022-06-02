type Bp = 'sm'|'md'|'lg'|'xl';

export const screen = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const breakpoint = (screenSize: Bp) => {
  if (screenSize === 'sm') return `@media only screen and (min-width: ${screen.sm}px)`
  if (screenSize === 'md') return `@media only screen and (min-width: ${screen.md}px)`
  if (screenSize === 'lg') return `@media only screen and (min-width: ${screen.lg}px)`
  if (screenSize === 'xl') return `@media only screen and (min-width: ${screen.xl}px)`
}