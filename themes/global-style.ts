import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { device } from './theme';

export const GlobalStyle = createGlobalStyle`
${reset}
  .global-fnt {
    font-family: 'SSShinb7';
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
    ${device.mobile} {
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
