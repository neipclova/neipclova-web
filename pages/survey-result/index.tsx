import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SurveyResultScreen } from '../../screens/survey/survey-result';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

const SurveyResultPage = () => {
  return (
    <>
      <Head>
        <title>설문지 | 네잎클로바</title>
      </Head>
      <SurveyResultScreen />
    </>
  );
};

export default SurveyResultPage;
