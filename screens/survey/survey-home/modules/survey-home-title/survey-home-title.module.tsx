import 'antd/dist/antd.css';
import { Typography } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

import tired from '../../../../../assets/images/직장인.png';

type ISurveyHomeTitleModuleProps = {};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.family.title};
  .title {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
  .xl {
    font-size: ${({ theme }) => theme.fonts.size.lg};
  }
`;

const TypographyTitle = styled(Typography.Title)`
  text-align: center;
`;

export const SurveyHomeTitleModule: FC<ISurveyHomeTitleModuleProps> = () => {
  return (
    <Div>
      <TypographyTitle className="xl">꽉 막히는 출근길!</TypographyTitle>
      <TypographyTitle className="title">나는 어떤 MBTI 유형일까요?</TypographyTitle>
      <TypographyTitle className="title">지옥의 출근길 탐험 Go!</TypographyTitle>
      <Image src={tired} width={250} height={250} objectFit="contain"></Image>
    </Div>
  );
};
