import { Space } from 'antd';
import { FC } from 'react';
import { SurveyProcessingAnswer, SurveyProcessingQuestion } from './components';

type ISurveyProcessingModuleProp = {};

export const SurveyProcessingModule: FC<ISurveyProcessingModuleProp> = () => {
  return (
    <div style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
      <Space direction="vertical">
        <SurveyProcessingQuestion id={1} data={'직장인? 학생? Who are you?'} />
        <SurveyProcessingAnswer data={['백수', '개백수']} align={'box'} />

        <SurveyProcessingQuestion data={'나는 CSS가?'} />
        <SurveyProcessingAnswer data={['죽이고 싶다', '개같다']} align={'row'} />
      </Space>
    </div>
  );
};
