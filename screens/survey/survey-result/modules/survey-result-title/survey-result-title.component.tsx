import Image from 'next/image';
import { FC } from 'react';

import ENFJESFJ from './images/ENFJ,ESFJ.jpeg';
import ENFPESFP from './images/ENFP,ESFP.jpeg';
import ENTPINTP from './images/ENTP,INTP.jpeg';
import ESTJENTJISTJ from './images/ESTJ,ENTJ,ISTJ.jpeg';
import ESTP from './images/ESTP.jpeg';
import INFJ from './images/INFJ.jpeg';
import INFP from './images/INFP.jpeg';
import INTJ from './images/INTJ.jpeg';
import ISFJISFPISTP from './images/ISFJ,ISFP,ISTP.jpeg';

type ISurveyResultTitleComponentProp = {
  result: string;
};
const resultImage: { [key: string]: StaticImageData } = {
  STAY_HYDRATED: ENFJESFJ,
  DANCE: ENFPESFP,
  DEBATE: ENTPINTP,
  BAND: ESTJENTJISTJ,
  CLIMBING: ESTP,
  TRIP: INFJ,
  READING: INFP,
  STOCK_INVESTMENT: INTJ,
  CALIGRAPHY: ISFJISFPISTP,
};

// 일단 Infj의 경우에만 넣어놓은 것.
export const SurveyResultTitleComponent: FC<ISurveyResultTitleComponentProp> = ({ result }) => {
  const getResultImage = resultImage[result];
  return (
    // <>
    <>
      <Image src={getResultImage} width={600} height={1000}></Image>
    </>
    //   </div>
    // </>
  );
};
