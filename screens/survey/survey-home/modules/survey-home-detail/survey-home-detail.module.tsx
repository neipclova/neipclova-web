import { LinkOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserAgent } from './survey-home-detail.method';

type ISurveyHomeDetailModuleProps = {};

const HoverButton = styled(Button)`
  :hover {
    color: #00ccff;
    background-color: white;
  }
`;


export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = (hi: any) => {
  const [visitorId, setVisitorId] = useState(0);

  const saveVisitorInfo = async () => {
    const userAgentResponse = await getUserAgent();

    // const response = await axios.post<any, { visitorId: number; }>('http://localhost:8080/start/club', {
    //   ip_address: "127.0.0.0",
    //   agent_os: userAgentResponse.os,
    //   agent_browser: userAgentResponse.browser,
    //   access_url: "https://test",
    //   created_at: "yyyy-MM-dd HH:mm:ss"
    // });

    // console.log(response);
    // setVisitorId(response.visitorId);


    // 테스트 코드
    const response = {
      ip_address: "127.0.0.0",
      agent_os: userAgentResponse.os,
      agent_browser: userAgentResponse.browser,
      access_url: "https://test",
      created_at: "yyyy-MM-dd HH:mm:ss"
    };

    const expected_reponse = { visitorId: 12345678 } // visitor_id
    console.log(expected_reponse);
    setVisitorId(expected_reponse.visitorId);
  }

  useEffect(() => {
    saveVisitorInfo();
  }, []);

  const handleStartButtonClick = () => {
    saveVisitorInfo();
  }

  return (
    <div style={{ display: 'flex', padding: 70, justifyContent: 'center' }}>
      <Space direction="vertical">
        <Link href={{
          pathname: "/survey",
          query: { visitorId: visitorId }
        }}>
          <a>
            <HoverButton
              type="primary"
              shape="round"
              size="large"
              onClick={() => { handleStartButtonClick }}
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
