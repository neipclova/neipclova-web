import { Space } from 'antd';
import { useRouter } from 'next/router';
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

type ISurveyResultScreenProps = {};

export const SurveyResultScreen: FC<ISurveyResultScreenProps> = () => {
  const router = useRouter();
  const { result } = router.query;
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
        <SurveyResultTitleComponent result={String(result)} />
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
