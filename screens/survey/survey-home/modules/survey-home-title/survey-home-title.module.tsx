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
    font-size: ${({ theme }) => theme.fonts.size.title};
  }
  .xl {
    font-size: ${({ theme }) => theme.fonts.size.xl};
  }
`;

const TypographyTitle = styled(Typography.Title)`
  text-align: center;
`;

export const SurveyHomeTitleModule: FC<ISurveyHomeTitleModuleProps> = () => {
  return (
<<<<<<< HEAD
    <>

      <Title level={4} style={{ textAlign: 'center' }}>
        꽉 막히는 출근길!
      </Title>
      <Title level={2} style={{ textAlign: 'center' }}>
        나는 어떤 MBTI 유형일까요?
      </Title>
      <Title level={1} style={{ textAlign: 'center' }}>
        지옥의 출근길 탐험 Go!
      </Title>
      <Image src={logo} width={75} height={75} ></Image>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>

          <Image src={tired} width={200} height={200} ></Image>
      </div>
    </>
=======
    <Div>
      <TypographyTitle className="xl">꽉 막히는 출근길!</TypographyTitle>
      <TypographyTitle className="title">나는 어떤 MBTI 유형일까요?</TypographyTitle>
      <TypographyTitle className="title">지옥의 출근길 탐험 Go!</TypographyTitle>
      <Image src={tired} width={300} height={300} objectFit="contain"></Image>
    </Div>
>>>>>>> 260e1bafc89ec756b1885bb1aefee7a443f71464
  );
};
