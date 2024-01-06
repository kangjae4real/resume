export const MOBILE_BREAK_POINT: number = 960;

type MobileMediaQueryValue = `@media screen and (max-width: ${number}px)`;
export const MOBILE_MEDIA_QUERY: MobileMediaQueryValue = `@media screen and (max-width: ${MOBILE_BREAK_POINT}px)`;
