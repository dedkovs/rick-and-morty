import { mainApi } from '../../api';

const API_RESOURCE = '/character';

export const fetchApi = async (searchParams: string) => {
  const path = API_RESOURCE + '/?' + searchParams;
  return await mainApi(path);
};
