import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ResultProcessingScreen } from '../../screens/survey/survey-result';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const ResultProcessingPage = () => {
  return (
    <>
      <Head>
        <title>설문지 | 네잎클로바</title>
      </Head>
      <ResultProcessingScreen />
    </>
  );
};

export default ResultProcessingScreen;
