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
      sky: string;
      red: string;
      dark_red: string;
    };

    margins: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };

    paddings: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };

    fonts: {
      family: {
        base: string;
        title: string;
      };
      size: {
        sm: string;
        base: string;
        lg: string;
        xl: string;
        title: string;
      };
      weight: {
        light: number;
        normal: number;
        bold: number;
      };
    };

    size: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
