import { LinkOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserAgent } from './survey-home-detail.method';

type ISurveyHomeDetailModuleProps = {};

export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = () => {

  const [visitorId, setVisitorId] = useState(0);
  const [visitorSurveyResultId, setVisitorSurveyResultId] = useState(0);

  const saveVisitorInfo = async () => {
    const userAgentResponse = await getUserAgent();

    const response = await axios.post<any, { visitorId: number; visitorSurveyResultId: number; }>('http://localhost:8080/start/CLUB', {
      ipAddress: "127.0.0.0",
      agentOs: userAgentResponse.os,
      agentBrowser: userAgentResponse.browser,
      accessUrl: "https://test"
    });

    console.log(response);
    setVisitorId(response.visitorId);
    setVisitorSurveyResultId(response.visitorSurveyResultId);

    // // 테스트 코드
    // const response = {
    //   ipAddress: "127.0.0.0",
    //   agentOs: userAgentResponse.os,
    //   agentBrowser: userAgentResponse.browser,
    //   accessUrl: "https://test"
    // };
    // console.log('response');
    // const expected_reponse = { visitorId: 12345678, visitorSurveyResultId: 2222 } // visitor_id
    // console.log(expected_reponse);
    // console.log(visitorId);
    // setVisitorId(expected_reponse.visitorId);
    // console.log(visitorId);
    // setVisitorSurveyResultId(expected_reponse.visitorSurveyResultId);
    // // 테스트 코드
  }

  useEffect(() => {
    // // 테스트 코드
    // console.log("업데이트 될 때 실행된다")
    // console.log(visitorId)
    // console.log(visitorSurveyResultId)
    // // 테스트 코드
  }, [visitorId, visitorSurveyResultId]);

  const handleStartButtonClick = () => {
    saveVisitorInfo();
  }

  return (
    <StyledSpace direction="vertical" align="center">
      <Link href={{ pathname: "/survey", query: { visitorId: visitorId } }}>
        <a>
          <HoverButton type="text" onClick={() => { handleStartButtonClick() }}>지금 바로 시작하기</HoverButton>
        </a>
      </Link>
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
  :hover {
    background-color: white;
  }
`;

const HoverButtonSmall = styled(Button)`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${({ theme }) => theme.colors.white};
  background: none;
  height: 100%;
  :hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }
`;
