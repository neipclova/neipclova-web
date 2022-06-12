import { DefaultTheme } from 'styled-components';

const flex = (direction = 'row', justify = 'center', align = 'center') => {
  return `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  `;
};
//
const colors = {
  black: '#0E0E0E',
  white: '#FFFFFF',
  yellow: '#edb83c',
  orange: '#eb7952',
  gray: '#6e6e6e',
  gray_background: '#f5f5f5',
};

// const margins = {
//   sm: '.5rem',
//   base: '1rem',
//   lg: '2rem',
//   xl: '3rem',
// };

// const paddings = {
//   sm: '.5rem',
//   base: '1rem',
//   lg: '2rem',
//   xl: '3rem',
// };

// const fonts = {
//   family: {
//     base: `'Noto Sans KR', sans-serif`,
//     title: `'Merriweather', serif`,
//   },
//   size: {
//     sm: '1.4rem',
//     base: '1.6rem',
//     lg: '2rem',
//     xl: '2.5rem',
//     title: '6rem',
//   },
//   weight: {
//     light: 100,
//     normal: 400,
//     bold: 700,
//   },
// };

// const colors = {
//   red: '#ff4d4d',
//   yellow: '#ffff4d',
//   blue: '#0099ff',
//   primary: '#333',
//   secondary: '#fff',
//   tertiary: '#808080',
//   sky: '#afe5f8',
//   orange: '#f96b7e',
// };

// const size = {
//   mobile: '425px',
//   tablet: '768px',
//   desktop: '1440px',
// };

// // 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
// export const device = {
//   mobile: `@media only screen and (max-width: ${size.mobile})`,
//   tablet: `@media only screen and (max-width: ${size.tablet})`,
//   desktopL: `@media only screen and (max-width: ${size.desktop})`,
// };

// // 테마와 관련없이 공통으로 사용되는 변수들입니다
// export const theme = {
//   margins,
//   paddings,
//   fonts,
//   device,
//   colors,
// };

const theme: DefaultTheme = {
  flex,
  colors,
};

export default theme;
