import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { device, theme } from './theme';

export const GlobalStyle = createGlobalStyle`
${reset}
  body { 
    padding: ${theme.paddings.base};
  }
  .global-fnt {
    font-family: ${theme.fonts.family.base};
    font-size: ${theme.fonts.size.xl}
  }
  .global-footer {
    background: ${theme.colors.white};
    color : ${theme.colors.black};
    text-align: center;
  }
  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    $:disabled {
        cursor: default;
        fill: #f2f3f4;
    }
  }
  .pc-tablet-only {
    display: block;
    ${device.desktopL} {
      display: none;
    }
  }
  .tablet-mobile-only{
    display: none;
    ${device.tablet}{
      display:block;
    }
  }
  .mobile-only {
    display: none;
    ${device.mobile} {
      display: block;
    }
  }
`;
