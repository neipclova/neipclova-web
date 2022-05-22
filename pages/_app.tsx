import Head from 'next/head';
import PropTypes from 'prop-types';
import './_app.css';
import 'antd/dist/antd.css';
import { AppContext } from 'next/app';

const NeipClova = ({ Component }: AppContext) => {
  return (
    <>
      <Head>
        <title>당신의 MBTI는 무엇입니까? | 네잎클로바</title>
      </Head>
      <Component />
    </>
  );
};

NeipClova.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NeipClova;
