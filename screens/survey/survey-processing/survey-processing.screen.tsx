import { FC } from 'react';
import { Card, Space } from 'antd';
import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';
import { SurveyProcessingLayout } from '../../../components';
type ISurveyProcessingScreenProps = {};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = () => {
  return (
    <SurveyProcessingLayout>
      <div style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
        <Space direction="vertical">
          <SurveyProcessingQuestionComponent data={'직장인? 학생? Who are you?'} />
          <SurveyProcessingAnswerComponent data={['백수', '개백수']} align={'box'} />

          <SurveyProcessingQuestionComponent data={'나는 CSS가?'} />
          <SurveyProcessingAnswerComponent data={['죽이고 싶다', '개같다']} align={'row'} />
        </Space>
      </div>
    </SurveyProcessingLayout>
  );
};
