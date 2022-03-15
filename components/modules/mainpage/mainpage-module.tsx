import { Space } from 'antd';
import { FC } from 'react';
import { MainpageURLButton, MainpageStartButton, MainpageHeader } from './components';

type IMainpageModuleProp = {};

export const MainpageModule: FC<IMainpageModuleProp> = () => {
    return (
        <div style={{ display: 'flex', padding: 10, justifyContent: 'center' }}>
            <Space direction="vertical">
                <MainpageHeader />
                <br />
                <br />
                <body>
                <br />
                <br />
                    <div style={{ display: 'flex', padding: 70, justifyContent: 'center' }}>
                    <Space direction="vertical">
                        <MainpageStartButton />
                        <br />
                        <br />
                        <MainpageURLButton />
                    </Space>
                    </div>
                </body>
            </Space>
        </div>
    );
};