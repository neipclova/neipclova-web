import { FC, useEffect, useState } from 'react';
import { Card, Space, Typography, Divider, Row, Button } from 'antd';
import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';
import { SurveyProcessingLayout } from '../../../components';
const { Title } = Typography;

import Image from 'next/image';
import Link from 'next/link';
import morning from '../../../assets/images/morning.png';
import { getImage } from './survey-processing.method';

type ISurveyProcessingScreenProps = {};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = () => {
  const [currentOrder, setCurrentOrder] = useState(1);
  const [type, setType] = useState('');
  console.log('click type:', type, currentOrder);
  const handleClickButton = (input: string) => {
    if (input === '학생') {
      setType('student');
    } else if (input === '직장인') {
      setType('worker');
    }
    console.log('click type:', type, currentOrder);
  };

  useEffect(() => {
    console.log;
  }, [currentOrder, type]);

  return (
    <SurveyProcessingLayout>
      <div
        style={{
          display: 'flex',
          padding: 30,
          justifyContent: 'center',
          backgroundColor: 'white',
          flexDirection: 'column',
        }}
      >
        {currentOrder ? (
          currentOrder == 1 ? (
            <Space direction="vertical">
              <Title level={3} style={{ textAlign: 'center' }}>
                {'당신은 학생입니까 직장인입니까?'}
              </Title>
              <Row key={0} gutter={[16, 24]}>
                {['학생', '직장인'].map((item, _idx) => {
                  return (
                    <Button
                      key={_idx}
                      size="large"
                      shape="round"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                      block
                      onClick={() => {
                        setCurrentOrder(2);
                        handleClickButton(item);
                      }}
                    >
                      {item}
                    </Button>
                  );
                })}
              </Row>
            </Space>
          ) : (
            <Space direction="vertical">
              <SurveyProcessingQuestionComponent
                setCurrentOrder={setCurrentOrder}
                currentOrder={currentOrder}
                type={type}
              />
              <SurveyProcessingAnswerComponent
                setCurrentOrder={setCurrentOrder}
                currentOrder={currentOrder}
              />
            </Space>
          )
        ) : (
          <Link href="/survey/result" />
        )}
      </div>
      <Image src={getImage(currentOrder)} />
    </SurveyProcessingLayout>
  );
};
