import Head from 'next/head';
import { FC } from 'react';

import { ISurveyData } from 'components';
import { SURVEY_TYPE } from 'utils/paths';
import Api from 'utils/util';

import { SurveyProcessingScreen } from '../../screens';

type ISurveyProcessingPageProps = {
  surveyData: ISurveyData;
};

const SurveyProcessingPage: FC<ISurveyProcessingPageProps> = ({ surveyData }) => {
  return (
    <>
      <Head>
        <title>설문지 | 네잎클로바</title>
      </Head>
      <SurveyProcessingScreen surveyData={surveyData} />
    </>
  );
};

export default SurveyProcessingPage;

export async function getStaticProps() {
  try {
    const response = await Api.get<ISurveyData>(`/survey/${SURVEY_TYPE}`);
    const surveyData = response.data;
    return {
      props: {
        surveyData: surveyData,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
