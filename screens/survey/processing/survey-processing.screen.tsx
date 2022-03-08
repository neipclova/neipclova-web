import { NextPage } from 'next';
import { SurveyLayout, SurveyProcessingModule } from '../../../components';

type ISurveyProcessingScreenProps = {};

export const SurveyProcessingScreen: NextPage<ISurveyProcessingScreenProps> = () => {
  return (
    <SurveyLayout>
      <SurveyProcessingModule />
    </SurveyLayout>
  );
};
