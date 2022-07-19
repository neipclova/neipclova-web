import Head from 'next/head';

import { SurveyProcessingScreen } from '../../screens';

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

export default SurveyProcessingPage;
