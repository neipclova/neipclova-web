import { FC, useEffect, useState } from 'react';
import { Button, Space, Typography } from 'antd';
import Link from 'next/link';
import { LinkOutlined } from '@ant-design/icons';
import { getNumVisitor } from './survey-home-statistics.method';

type ISurveyHomeStatisticsModuleProps = {};

export const SurveyHomeStatisticsModule: FC<ISurveyHomeStatisticsModuleProps> = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const getNumVisitors = async () => {
    const numVisitors = await getNumVisitor();
    console.log(numVisitors);
    setNumVisitors(numVisitors);
  };

  useEffect(() => {
    getNumVisitors();
  }, [numVisitors]);

  return (
    <Typography.Title level={4} style={{ textAlign: 'center' }} mark>
      총 {numVisitors}명이 방문했어요!
    </Typography.Title>
  );
};
