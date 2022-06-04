import { Typography } from 'antd';
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
// import * as data from './survey-processing-question.data';

type ISurveyProcessingQuestionComponentProp = {
  setCurrentOrder: any;
  currentOrder: number;
  type: string;
};
type IProps = {
  question: {
    [key: string]: string;
  };
  image_uri: string;
};
const { Title } = Typography;

export const SurveyProcessingQuestionComponent: FC<ISurveyProcessingQuestionComponentProp> = ({
  setCurrentOrder,
  currentOrder,
  type,
}) => {
  const [data, setData] = useState<IProps>({
    question: {
      student: '학생?',
      worker: '직장인?',
    },
    image_uri: '/Users/silvia1/Desktop/git/neipclova/neipclova-web/assets/images/dawn.png',
  });
  useEffect(() => {
    let completed = false;
    async function get() {
      const response = await axios({
      url: 'http://localhost:8080/question',
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
  }, [currentOrder]);
  return (
    <>
      <Title level={3} style={{ color: 'white' }}>
        <div
          dangerouslySetInnerHTML={{ __html: data.question[type] }}
        />
      </Title>

      {/* <Image src={image.dawn} height={1000} width={1000} /> */}
    </>
  );
};
