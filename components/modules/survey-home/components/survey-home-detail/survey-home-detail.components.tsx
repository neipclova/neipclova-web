import { FC } from 'react';
import { Button, Typography} from 'antd';
import Link from 'next/link';
import { LinkOutlined } from '@ant-design/icons';

type ISurveyHomeDetailStartButtonProp = {};
type ISurveyHomeDetailURLButtonProp = {};
type ISurveyHomeDetailStatisticsProp = {};

export const SurveyHomeDetailStartButton: FC<ISurveyHomeDetailStartButtonProp> = () => {
  return (
    <Link href="/survey">
      <a>
        <Button type="primary" shape="round" size="large">
          지금 바로 시작하기
        </Button>
      </a>
    </Link>
  );
};

export const SurveyHomeDetailURLButton: FC<ISurveyHomeDetailURLButtonProp> = () => {
  return (
        <Button type="primary" icon={<LinkOutlined />} size="large">
          &nbsp;&nbsp;URL 복사하기
        </Button>
  );
};

export const SurveyHomeDetailStatistics: FC<ISurveyHomeDetailStatisticsProp> = () => {
    const { Title } = Typography;
    return (
        <>
        <Title level={4} style={{textAlign:"center"}} mark>총 7명이 방문했어요!</Title>
        </>
    );
}