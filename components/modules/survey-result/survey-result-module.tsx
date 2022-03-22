import { Space } from 'antd';
import { FC } from 'react';
import { SurveyResultExplain, SurveyResultTitle } from './components';

type ISurveyResultModuleProp = {};

export const SurveyResultModule: FC<ISurveyResultModuleProp> = () => {
  return (
    <div style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
      <Space direction="vertical">
      <SurveyResultTitle />
        <SurveyResultExplain />
      </Space>
    </div>
  );
};