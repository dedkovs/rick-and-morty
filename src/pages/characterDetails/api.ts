import { mainApi } from '../../api';

const API_RESOURCE = '/character';

export const fetchApi = async (id: string) => {
  const path = API_RESOURCE + '/' + id;
  return await mainApi(path);
};
