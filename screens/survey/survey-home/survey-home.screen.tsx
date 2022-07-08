import { Space } from 'antd';
import { FC } from 'react';

import { SurveyHomeLayout } from '../../../components';

import {
  SurveyHomeDetailModule,
  SurveyHomeStatisticsModule,
  SurveyHomeTitleModule,
} from './modules';

type ISurveyHomeScreenProps = {};

export const SurveyHomeScreen: FC<ISurveyHomeScreenProps> = () => {
  return (
    <SurveyHomeLayout>
      <Space direction="vertical">
        <SurveyHomeTitleModule />
        <SurveyHomeStatisticsModule />
        <SurveyHomeDetailModule />
      </Space>
    </SurveyHomeLayout>
  );
};
