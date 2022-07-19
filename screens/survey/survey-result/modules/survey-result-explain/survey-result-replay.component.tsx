import { Button, Typography } from 'antd';
import { FC } from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

type ISurveyResultReplayComponentProp = {};

export const SurveyResultReplayComponent: FC<ISurveyResultReplayComponentProp> = () => {
  const { Title } = Typography;
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button color='brown' size = "large" icon={<ReloadOutlined />}>
        테스트 다시하기
      </Button>

    </div>
    </>
  );
};


