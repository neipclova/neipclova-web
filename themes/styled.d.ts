import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: (direction: string, justify: string, align: string) => string;

    colors: {
      black: string;
      white: string;
      yellow: string;
      orange: string;
      gray: string;
      gray_background: string;
    };
  }
}
