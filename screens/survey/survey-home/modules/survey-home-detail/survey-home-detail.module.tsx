import { LinkOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

import { IStartSurveyTypePostRequestData, IStartSurveyTypePostResponseData } from 'components';
import { PathEnum, SURVEY_TYPE } from 'utils/paths';
import Api from 'utils/util';

import { getUserAgent } from './survey-home-detail.method';

type ISurveyHomeDetailModuleProps = {};

export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = () => {
  const router = useRouter();
  const saveVisitorInfo = async () => {
    const userAgentResponse = await getUserAgent();
    const requestBody: IStartSurveyTypePostRequestData = {
      ipAddress: '127.0.0.0',
      agentOs: userAgentResponse.os,
      agentBrowser: userAgentResponse.browser,
      accessUrl: 'https://test',
    };
    const response = await Api.post<IStartSurveyTypePostResponseData>(
      `/start/${SURVEY_TYPE}`,
      requestBody
    );

    return response.data.visitor_survey_result_id;
  };

  const handleStartButtonClick = async () => {
    const visitorSurveyResultId = await saveVisitorInfo();
    router.push(
      `${PathEnum.SURVEY}?visitor_survey_result_id=${visitorSurveyResultId}`,
      PathEnum.SURVEY
    );
  };

  return (
    <StyledSpace direction="vertical" align="center">
      <HoverButton
        type="text"
        onClick={() => {
          handleStartButtonClick();
        }}
      >
        지금 바로 시작하기
      </HoverButton>
      <HoverButtonSmall type="text" icon={<LinkOutlined />}>
        URL 복사하기
      </HoverButtonSmall>
    </StyledSpace>
  );
};

const StyledSpace = styled(Space)`
  display: flex;
  padding: ${({ theme }) => theme.paddings.base};
`;

const HoverButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background: rgba(0, 0, 0, 0.6);
  font-size: ${({ theme }) => theme.fonts.size.lg};
  height: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  :hover {
    background-color: white;
  }
`;

const HoverButtonSmall = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.white};
  background: none;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;
