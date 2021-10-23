import { mainApi } from '../../api';

const API_RESOURCE = '/character';

export const fetchApi = async (residentsPath: string) => {
  const path = API_RESOURCE + '/' + residentsPath;
  return await mainApi(path);
};
