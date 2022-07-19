import { Space } from 'antd';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import PathEnum from 'utils/paths';

import { SurveyProcessingLayout } from '../../../components';

import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';
// import { setBackground } from './survey-processing.method';

type ISurveyProcessingScreenProps = {};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = () => {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(1);
  const [type, setType] = useState('student');

  useEffect(() => {
    if (!currentOrder) {
      console.log('result');
      router.push(PathEnum.SURVEY_RESULT);
    }
  }, [currentOrder, type]);

  return (
    <SurveyProcessingLayout>
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
