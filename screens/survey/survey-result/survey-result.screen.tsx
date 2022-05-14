import { Space } from 'antd';
import { NextPage } from 'next';
import { SurveyResultLayout } from '../../../components';
import { SurveyResultExplainComponent, SurveyResultTitleComponent } from './components';

type ISurveyResultScreenProps = {
  result: string;
};

export const SurveyResultScreen: NextPage<ISurveyResultScreenProps> = ({ result }) => {
  return (
    <SurveyResultLayout>
      <div style={{ display: 'flex', padding: 20, justifyContent: 'center' }}>
        <Space direction="vertical">
          <SurveyResultTitleComponent />
          <SurveyResultExplainComponent />
        </Space>
      </div>
    </SurveyResultLayout>
  );
};
