import { Space } from 'antd';
import { FC } from 'react';
import { ResultyProcessingTitle, ResultyProcessingExplain } from './components';

type ISurveyResultModuleProp = {};

export const SurveyResultModule: FC<ISurveyResultModuleProp> = () => {
  return (
    <div style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
      <Space direction="vertical">
        <ResultyProcessingTitle />
        <ResultyProcessingExplain />
      </Space>
    </div>
  );
};