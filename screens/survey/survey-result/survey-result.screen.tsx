import { VerticalAlignMiddleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { FC } from 'react';
import PathEnum from 'utils/paths';
import Api from 'utils/util';
import { SurveyResultLayout } from '../../../components';
import MiddlewarePlugin from 'next/dist/build/webpack/plugins/middleware-plugin';
import { SurveyResultReplayComponent, SurveyResultSeeallResultComponent, SurveyResultShareComponent, SurveyResultTitleComponent } from './modules';


type ISurveyResultScreenProps = {
  result: string;
};

export const SurveyResultScreen: FC<ISurveyResultScreenProps> = ({ result }) => {
  // TODO: remove this
  Api.get(`${PathEnum.API_URL}/survey`).then((response) => {
    console.log(response);
  });

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
