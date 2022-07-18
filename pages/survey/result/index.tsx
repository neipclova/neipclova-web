import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { SurveyResultScreen } from '../../../screens';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const SurveyResultPage = () => {
  return (
    <>
      <Head>
        <title>검사 결과 | 네잎클로바</title>
      </Head>
      <SurveyResultScreen result="abc" />
    </>
  );
};

export default SurveyResultPage;
