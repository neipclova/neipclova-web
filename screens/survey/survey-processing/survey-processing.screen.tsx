import { FC, useEffect, useState } from 'react';
import { Space } from 'antd';
import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';
import { SurveyProcessingLayout } from '../../../components';
import { setBackground } from './survey-processing.method';
import { useRouter } from 'next/router';

type ISurveyProcessingScreenProps = {};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = () => {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(1);
  const [type, setType] = useState('student');

  useEffect(() => {
    if (!currentOrder) {
      console.log('result');
      router.push('/survey/result');
    }
  }, [currentOrder, type]);

  return (
    <SurveyProcessingLayout setBackground={setBackground(currentOrder)}>
      {currentOrder && (
        <Space
          direction="vertical"
          style={{
            padding: 30,
            color: 'white',
            textAlign: 'center',
            wordBreak: 'keep-all',
          }}
        >
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
      )}
    </SurveyProcessingLayout>
  );
};
