import { NextPage } from 'next';
import { SurveyResultModule } from '../../../components';
import { SurveyResultLayout } from '../../../components/layouts/survey-result';

type ISurveyResultScreenProps = {};

export const SurveyResultScreen: NextPage<ISurveyResultScreenProps> = () => {
  return (
    <SurveyResultLayout>
      <SurveyResultModule />
    </SurveyResultLayout>
  );
};
