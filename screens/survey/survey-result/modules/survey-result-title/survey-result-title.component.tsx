import Image from 'next/image';
import { FC } from 'react';

import INFJ from './images/INFJ.jpeg';

type ISurveyResultTitleComponentProp = {};

// 일단 Infj의 경우에만 넣어놓은 것.
export const SurveyResultTitleComponent: FC<ISurveyResultTitleComponentProp> = () => {
  return (
    // <>
    <>
      <Image src={INFJ} width={600} height={1000}></Image>
    </>
    //   </div>
    // </>
  );
};
