import { Space } from 'antd';
import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { theme } from 'themes';

import { SurveyResultLayout } from '../../../components';

import {
  SurveyResultReplayComponent,
  SurveyResultSeeallResultComponent,
  SurveyResultShareComponent,
  SurveyResultTitleComponent,
} from './modules';

type ISurveyResultScreenProps = {
  result: string;
};

export const SurveyResultScreen: FC<ISurveyResultScreenProps> = ({ result }) => {
  // TODO: remove this
  // Api.get(`${PathEnum.API_URL}/survey`).then((response) => {
  //   console.log(response);
  // }
  //  );
  useEffect(() => {
    console.log(theme.flex);
  });
  return (
    <SurveyResultLayout>
      {/* <Div> */}
      <StyledSpace direction="vertical" align="center">
        <SurveyResultTitleComponent />
        <SurveyResultSeeallResultComponent />
        <SurveyResultReplayComponent />
        <SurveyResultShareComponent />
      </StyledSpace>
      {/* </Div> */}
    </SurveyResultLayout>
  );
};

const StyledSpace = styled(Space)`
  display: flex;
  padding: ${({ theme }) => theme.paddings.base};
`;
