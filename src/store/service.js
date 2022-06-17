import { get } from 'utils/api';

export const companyList = async (username) => {
    
  const respone = await get(`Permission/Auth/GetListCompanyByUsername?username=${username}`);
  return respone;
}