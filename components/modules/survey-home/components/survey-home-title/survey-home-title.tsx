import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { FC } from 'react';

type ISurveyHomeTitleProp = {};

export const SurveyHomeTitle: FC<ISurveyHomeTitleProp> = () => {
    const { Title } = Typography;
    return (
        <>
        <Title level={4} style={{textAlign:"center"}}>꽉 막히는 출근길!</Title>
        <Title level={2} style={{textAlign:"center"}}>나는 어떤 MBTI 유형일까요?</Title>
        <Title level={1} style={{textAlign:"center"}}>지옥의 출근길 탐험 Go!</Title>
        </>
    );
};

export default SurveyHomeTitle;