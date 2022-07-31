import type { AppProps } from 'next/app';
import Head from 'next/head';
import { elementType } from 'prop-types';
import './_app.css';
import 'antd/dist/antd.css';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'themes';

import { Footer } from 'antd/lib/layout/layout';

declare global {
  interface Window {
    Kakao: any;
  }
}

const NeipClova = ({ Component, pageProps }: AppProps) => {
  const thisYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <Head>
        <title>당신의 MBTI는 무엇입니까? | 네잎클로바</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer className="global-footer">
        Copyright &copy; <span>{thisYear()}</span>
      </Footer>
    </>
  );
};

NeipClova.propTypes = {
  Component: elementType.isRequired,
};

export default NeipClova;
