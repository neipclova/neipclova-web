import { Button, Typography } from 'antd';
import { FC } from 'react';
import { ShareAltOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

type ISurveyResultSeeallResultComponentProp = {};

export const SurveyResultSeeallResultComponent: FC<ISurveyResultSeeallResultComponentProp> = () => {
  const { Title } = Typography;
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <Button type="ghost" shape="round" size="large">
        모든 결과 보기
      </Button>

    </div>
    </>
  );
};


