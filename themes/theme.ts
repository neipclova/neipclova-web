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

const margins = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const paddings = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const fonts = {
  family: {
    base: `'SSShinb7', sans-serif`,
    title: `'tvN', serif`,
  },
  size: {
    sm: '1.4rem',
    base: '1.6rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

export const theme: DefaultTheme = {
  flex,
  colors,
  margins,
  paddings,
  fonts,
  size,
};
