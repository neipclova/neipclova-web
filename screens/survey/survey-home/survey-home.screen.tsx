import { SurveyHomeLayout } from '../../../components';
import { FC } from 'react';
import { Card, Space } from 'antd';
import {
  SurveyHomeDetailModule,
  SurveyHomeStatisticsModule,
  SurveyHomeTitleModule,
} from './modules';
type ISurveyHomeScreenProps = {};

export const SurveyHomeScreen: FC<ISurveyHomeScreenProps> = () => {
  return (
    <SurveyHomeLayout>
      <div style={{ display: 'flex', padding: 10, justifyContent: 'center' }}>
        <Space direction="vertical">
          <SurveyHomeTitleModule />
          <Card>
            <SurveyHomeDetailModule />
          </Card>
          <SurveyHomeStatisticsModule />
        </Space>
      </div>
    </SurveyHomeLayout>
  );
};
