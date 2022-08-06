import Head from 'next/head';

import { SurveyResultScreen } from '../../../screens';

const SurveyResultPage = () => {
  return (
    <>
      <Head>
        <title>검사 결과 | 네잎클로바</title>
      </Head>
      <SurveyResultScreen result="" />
    </>
  );
};

export default SurveyResultPage;
