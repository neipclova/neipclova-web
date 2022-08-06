import { ITypeGetResponseData } from 'components';
import { PathEnum } from 'utils';
import Api from 'utils/util';

export const getNumVisitor = async () => {
  const { data } = await Api.get<ITypeGetResponseData>(PathEnum.HOME);
  return data.total_visitor_num;
};
