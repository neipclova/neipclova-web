import { Space } from 'antd';
import { FC } from 'react';
import { SurveyProcessingAnswer, SurveyProcessingQuestion } from './components';

type ISurveyProcessingModuleProp = {};

export const SurveyProcessingModule: FC<ISurveyProcessingModuleProp> = () => {
  return (
    <div style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
      <Space direction="vertical">
        <SurveyProcessingQuestion data={'저녁메뉴'} />
        <SurveyProcessingAnswer />
      </Space>
    </div>
  );
};
