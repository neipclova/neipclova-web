import { FC } from 'react';
import { Button, Space } from 'antd';
import Link from 'next/link';
import { LinkOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type ISurveyHomeDetailModuleProps = {};

const HoverButton = styled(Button)`
  :hover {
    color: #00ccff;
    background-color: white;
  }
`;

export const SurveyHomeDetailModule: FC<ISurveyHomeDetailModuleProps> = () => {
  return (
    <div style={{ display: 'flex', padding: 70, justifyContent: 'center' }}>
      <Space direction="vertical">
        <Link href="/survey">
          <a>
            <HoverButton type="primary" shape="round" size="large">
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
