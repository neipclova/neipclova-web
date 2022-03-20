import { Space } from 'antd';
import { FC } from 'react';
import { SurveyHomeDetailURLButton, SurveyHomeDetailStartButton, SurveyHomeDetailStatistics, SurveyHomeTitle } from './components';

type ISurveyHomeModuleProp = {};

export const SurveyHomeModule: FC<ISurveyHomeModuleProp> = () => {
    return (
        <div style={{ display: 'flex', padding: 10, justifyContent: 'center' }}>
            <Space direction="vertical">
                <SurveyHomeTitle />
                <br />
                <br />
                <body>
                <br />
                <br />
                    <div style={{ display: 'flex', padding: 70, justifyContent: 'center' }}>
                    <Space direction="vertical">
                        <SurveyHomeDetailStartButton />
                        <br />
                        <br />
                        <SurveyHomeDetailURLButton />
                    </Space>
                    </div>
                </body>
                <SurveyHomeDetailStatistics />
            </Space>
        </div>
    );
};