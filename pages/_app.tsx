import type { AppProps } from 'next/app';
import Head from 'next/head';
import { elementType } from 'prop-types';
import './_app.css';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../themes/GlobalStyle';
import theme from '../themes/theme';

const NeipClova = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>당신의 MBTI는 무엇입니까? | 네잎클로바</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

NeipClova.propTypes = {
  Component: elementType.isRequired,
};

export default NeipClova;
