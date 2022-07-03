import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import { device, theme } from './theme';

export const GlobalStyle = createGlobalStyle`
${reset}
  body { 
    display: flex;
    justify-content: center;
    padding: ${theme.paddings.sm};
    textAlign: 'center';
  }
  .global-fnt {
    font-family: 'anakseo';
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
