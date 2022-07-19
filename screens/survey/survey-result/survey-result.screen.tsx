import { VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { NextPage } from 'next';
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin';
import { SurveyResultLayout } from '../../../components';
import { SurveyResultReplayComponent, SurveyResultSeeallResultComponent, SurveyResultShareComponent, SurveyResultTitleComponent } from './modules';

type ISurveyResultScreenProps = {
  result: string;
};

export const SurveyResultScreen: NextPage<ISurveyResultScreenProps> = ({ result }) => {
  return (
    <SurveyResultLayout>
      <div style={{ display: 'flex', padding: 50, justifyContent: 'center',
    // background : '#AD997A'
    }}>
        <Space direction="vertical">
          <div style={{display: 'table', padding: 50, justifyContent: 'center',
          background : '#AD997A'
          // borderStyle : 'solid', borderWidth : 10, borderColor : '#000000'
          }}>
            <SurveyResultTitleComponent />
              <br/>
              <SurveyResultSeeallResultComponent />
              <br/>
              <SurveyResultReplayComponent />
              <br/>
              <SurveyResultShareComponent />

          </div>
        </Space>
      </div>

    </SurveyResultLayout>
  );
};
