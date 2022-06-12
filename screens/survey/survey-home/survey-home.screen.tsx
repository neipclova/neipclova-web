import { Space } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';

import { SurveyHomeLayout } from '../../../components';

import {
  SurveyHomeDetailModule,
  SurveyHomeStatisticsModule,
  SurveyHomeTitleModule,
} from './modules';

type ISurveyHomeScreenProps = {};

const StyledDiv = styled.div`
  display: flex;
  padding: 10;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
`;

export const SurveyHomeScreen: FC<ISurveyHomeScreenProps> = () => {
  return (
    <SurveyHomeLayout>
      <StyledDiv>
        <Space direction="vertical">
          <SurveyHomeTitleModule />
          {/* <Card bordered={false} style={{ background: 'linear-gradient(#f96b7e, #afe5f8)'}}> */}
          <SurveyHomeDetailModule />
          {/* </Card> */}
          <SurveyHomeStatisticsModule />
        </Space>
      </StyledDiv>
    </SurveyHomeLayout>
  );
};
