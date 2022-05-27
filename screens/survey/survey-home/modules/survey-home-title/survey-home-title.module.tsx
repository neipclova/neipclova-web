import 'antd/dist/antd.css';
import { Row, Typography } from 'antd';
import { FC } from 'react';
import Image from 'next/image';
import logo from '../../../../../assets/images/neipclova_logo.png'
import tired from '../../../../../assets/images/직장인.png'

type ISurveyHomeTitleModuleProps = {};

export const SurveyHomeTitleModule: FC<ISurveyHomeTitleModuleProps> = () => {

  const { Title } = Typography;
  return (
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
  );
};
