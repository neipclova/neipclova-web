import { LinkOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { getUserAgent } from './survey-home-detail.method';

type ISurveyHomeDetailModuleProps = {};

const HoverButton = styled(Button)`
  :hover {
    color: #00ccff;
    background-color: white;
  }
`;

const saveVisitorInfo = async () => {
  const userAgentResponse = await getUserAgent();

  // const response = {
  //   ip_address: "127.0.0.0",
  //   agent_os: userAgentResponse.os,
  //   agent_browser: userAgentResponse.browser,
  //   access_url: "https://test",
  //   created_at: "yyyy-MM-dd HH:mm:ss"
  // };
  const response = await axios.post('http://localhost:8080/start/club', {
    ip_address: "127.0.0.0",
    agent_os: userAgentResponse.os,
    agent_browser: userAgentResponse.browser,
    access_url: "https://test",
    created_at: "yyyy-MM-dd HH:mm:ss"
  });
  console.log(response);
}

export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = () => {
  return (
    <div style={{ display: 'flex', padding: 70, justifyContent: 'center' }}>
      <Space direction="vertical">
        <Link href="/survey">
          <a>
            <HoverButton
              type="primary"
              shape="round"
              size="large"
              onClick={() => { saveVisitorInfo() }}
            >
              지금 바로 시작하기
            </HoverButton>
          </a>
        </Link>
        <br />
        <br />
        <Button type="primary" icon={<LinkOutlined />} size="large">
          &nbsp;&nbsp;URL 복사하기
        </Button>
      </Space>
    </div>
  );
};
