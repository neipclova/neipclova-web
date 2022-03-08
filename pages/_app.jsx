import { AppProps } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const NeipClova = ({ Component }) => {
  return (
    <>
      <Head>
        <title>네잎클로바</title>
      </Head>
      <Component />
    </>
  );
};

NeipClova.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NeipClova;
