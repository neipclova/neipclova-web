import Image from 'next/image';
import { FC } from 'react';
// import { Layout } from 'antd';

import INFJ from './images/INFJ.jpeg';
import test1 from './images/test1.png';
import styled, { keyframes } from 'styled-components';

type ISurveyResultTitleComponentProp = {};

// 일단 Infj의 경우에만 넣어놓은 것.
export const SurveyResultTitleComponent: FC<ISurveyResultTitleComponentProp> = () => {
  return (
    // <>
    <>
      {/* <Image src={INFJ} width={600} height={1000}> */}
      {/* <ResultImage src={INFJ} width={600} height={1000}></ResultImage> */}
      <ResultImage src={test1} width={600} height={1000}></ResultImage>
      {/* </Image> */}
    </>
    //   </div>
    // </>
  );
};


const ResultImage = styled(Image)`
  box-shadow: 0px 0px 100px #000000;
`;


const SurveyImage = styled.div`
box-shadow: 0px 0px 20px #000;
`;
