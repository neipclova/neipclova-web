import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SurveyProcessingScreen } from '../../screens';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const SurveyProcessingPage = () => {
  return (
    <>
      <Head>
        <title>설문지 | 네잎클로바</title>
      </Head>
      <SurveyProcessingScreen />
    </>
  );
};

export default SurveyProcessingScreen;
