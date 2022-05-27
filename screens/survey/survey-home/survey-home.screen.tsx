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
      <div style={{ display: 'flex', padding: 10, justifyContent: 'center', background: 'linear-gradient(#afe5f8, 50%, #f96b7e, #003332)'}}>
        <Space direction="vertical">
          <SurveyHomeTitleModule />
          {/* <Card bordered={false} style={{ background: 'linear-gradient(#f96b7e, #afe5f8)'}}> */}
            <SurveyHomeDetailModule />
          {/* </Card> */}
          <SurveyHomeStatisticsModule />
        </Space>
      </div>
    </SurveyHomeLayout>
  );
};
