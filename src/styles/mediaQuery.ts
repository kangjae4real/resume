export const MOBILE_BREAK_POINT: number = 960;

type MobileMediaQueryValue = `@media screen and (min-width: ${number}px)`;
export const MOBILE_MEDIA_QUERY: MobileMediaQueryValue = `@media screen and (min-width: ${MOBILE_BREAK_POINT}px)`;
