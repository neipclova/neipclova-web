import { Space } from 'antd';
import { FC, useEffect, useState } from 'react';

import { SurveyProcessingLayout } from '../../../components';

import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';
import { setBackground } from './survey-processing.method';
import { useRouter, withRouter } from 'next/router';
import axios from 'axios';

type ISurveyProcessingScreenProps = {};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = () => {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(1);
  const [type, setType] = useState('student');
  const visitorId = Number(router.query.visitorId)

  useEffect(() => {
    if (!currentOrder) {
      console.log('result');

      // result api가 여기서 호출되어야 하나..?
      const response = axios.post<any, { visitorId: number; }>('http://localhost:8080/result/club', {
        visitor_id: visitorId,
        timestamp: "yyyy-MM-dd HH:mm:ss"
      });
      console.log(response); // response : { result: string(enum)}

      router.push('/survey/result');
    }
  }, [currentOrder, type]);

  return (
    <SurveyProcessingLayout background={setBackground(currentOrder)}>
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
            visitorId={visitorId}
          />
        </Space>
      )}
    </SurveyProcessingLayout>
  );
};
