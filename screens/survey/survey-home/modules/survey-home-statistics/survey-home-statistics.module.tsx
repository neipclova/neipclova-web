import { Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { theme } from 'themes';

import { getNumVisitor } from './survey-home-statistics.method';

type ISurveyHomeStatisticsModuleProps = {};

export const SurveyHomeStatisticsModule: FC<ISurveyHomeStatisticsModuleProps> = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const getNumVisitors = async () => {
    const numVisitors = await getNumVisitor();
    setNumVisitors(numVisitors);
  };

  useEffect(() => {
    getNumVisitors();
  }, [numVisitors]);

  return (
    <TypographyTitle level={2}>
      총 <span style={{ color: theme.colors.yellow }}>{numVisitors.toLocaleString()}</span>
      명이 방문했어요!
    </TypographyTitle>
  );
};

const TypographyTitle = styled(Typography.Title)`
  text-align: center;
  font: while;
`;
