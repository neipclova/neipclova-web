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

const Div = styled.div`
  padding: ${({ theme }) => theme.paddings.lg};
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.sky}, 50%, ${theme.colors.red}, ${theme.colors.dark_red})`};
`;

export const SurveyHomeScreen: FC<ISurveyHomeScreenProps> = () => {
  return (
    <SurveyHomeLayout>
      <Div>
        <Space direction="vertical">
          <SurveyHomeTitleModule />
          <SurveyHomeStatisticsModule />
          <SurveyHomeDetailModule />
        </Space>
      </Div>
    </SurveyHomeLayout>
  );
};
