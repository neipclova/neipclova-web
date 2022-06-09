import { FC, useEffect, useState } from 'react';
import { Space } from 'antd';
import { SurveyProcessingAnswerComponent, SurveyProcessingQuestionComponent } from './modules';
import { SurveyProcessingLayout } from '../../../components';
import { setBackground } from './survey-processing.method';
import { useRouter } from 'next/router';
import axios from 'axios';

type ISurveyProcessingScreenProps = {};
type IProps = {
  questions: {
    [key: number]: {
      question: {
        [key: string]: string;
      };
      image_uri: string;
    };
  },
  options: {
    [key: number]: {
    order: number;
    next_question_order: number | null;
    option: string;
    score?: string;
  }[]}
};

export const SurveyProcessingScreen: FC<ISurveyProcessingScreenProps> = () => {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(1);
  const [type, setType] = useState('student');

  const [data, setData] = useState<IProps>();
  let completed = false;
  useEffect(() => {
    async function get() {
      const response = await axios({
      url: 'http://localhost:8080/survey/club',
      method: 'get',
      data:{
        currentOrder: currentOrder
      }});
      if(!completed){
        setData(response.data);
      }
    }
    get();
    return () => {
      completed = true;
    }
  });

  useEffect(() => {
    if (!currentOrder) {
      console.log('result');
      router.push('/survey/result');
    }
  }, [currentOrder, type]);

  return (
    <SurveyProcessingLayout setBackground={setBackground(currentOrder)}>

      {completed && currentOrder && (
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
            questions = {data!.questions}
          />
          <SurveyProcessingAnswerComponent
            setCurrentOrder={setCurrentOrder}
            currentOrder={currentOrder}
            options = {data!.options}
          />
        </Space>
      )}
    </SurveyProcessingLayout>
  );
};
