import { Space } from 'antd';
import { FC } from 'react';

import PathEnum from 'utils/paths';
import Api from 'utils/util';

import { SurveyResultLayout } from '../../../components';

import { SurveyResultExplainComponent, SurveyResultTitleComponent } from './components';

type ISurveyResultScreenProps = {
  result: string;
};

export const SurveyResultScreen: FC<ISurveyResultScreenProps> = ({ result }) => {
  // TODO: remove this
  Api.get(`${PathEnum.API_URL}/survey`).then((response) => {
    console.log(response);
  });

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
