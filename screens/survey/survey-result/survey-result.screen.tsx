import { NextPage } from 'next';
import { SurveyResultModule } from '../../../components';
import { ResultLayout } from '../../../components/layouts/survey-result';

type IResultProcessingScreenProps = {};

export const ResultProcessingScreen: NextPage<IResultProcessingScreenProps> = () => {
  return (
    <ResultLayout>
      <SurveyResultModule />
    </ResultLayout>
  );
};
