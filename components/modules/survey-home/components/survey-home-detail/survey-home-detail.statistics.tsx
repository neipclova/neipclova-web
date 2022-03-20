import {FC} from 'react';
import { Typography } from 'antd';

type ISurveyHomeDetailStatisticsProp = {};

export const SurveyHomeDetailStatistics: FC<ISurveyHomeDetailStatisticsProp> = () => {
    const { Title } = Typography;
    return (
        <>
        <Title level={4} style={{textAlign:"center"}} mark>총 7명이 방문했어요!</Title>
        </>
    );
}