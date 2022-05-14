import dawn from '../../../assets/images/dawn.png';
import morning from '../../../assets/images/morning.png';
import noon from '../../../assets/images/noon.png';
import afternoon from '../../../assets/images/afternoon.png';
import earlyevening from '../../../assets/images/earlyevening.png';
import evening from '../../../assets/images/evening.png';
import night from '../../../assets/images/night.png';

export const getImage = (order: number) => {
  if (order < 2) {
    return dawn;
  } else if (order < 4) {
    return morning;
  } else if (order < 7) {
    return noon;
  } else if (order < 10) {
    return afternoon;
  } else if (order < 13) {
    return earlyevening;
  } else if (order < 16) {
    return evening;
  } else {
    return night;
  }
};
