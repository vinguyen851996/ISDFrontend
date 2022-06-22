import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import * as services from "./service";
import { useNavigate } from "react-router-dom";
import {setUserSession} from "../utils/localStorageHelper"
export const ProviderStore = ({ children }) => {
  let navigate = useNavigate();
  const store = useLocalObservable(() => ({
    company: [],
    saleCode: [],
    signInUser:{},
    async getCompany(username) {
      try {
        const { data } = await services.companyList(username);
      
        store.company = data;
      } catch (e) {
        // store.setError(e);
      }
    },

    async login(data) {
      try {
       
        const result = await services.login(data);
        const userSession = {
          accountId: result.data.accountId,
          userName: result.data.userName,
          companyCode: result.data.companyCode,
          companyId: result.data.companyId,
          companyName: result.data.companyName,
          expiredTime: result.data.expiredTime,
          saleOrg: result.data.saleOrg,
          saleOrgName: result.data.saleOrgName,
          validaty: result.data.validaty,
          roles: result.data.roles,
          role: result.data.role,
          token: result.data.token,
          refreshToken: result.data.refreshToken,
      };
      store.signInUser=userSession;
      setUserSession(userSession);
        navigate("../../Dashboard/index", { replace: true });
      } catch (e) {}
    },

    async saleORG(userName, companyCode) {
      try {
        const { data } = await services.saleORG(userName, companyCode);
        store.saleCode = data;
    
      } catch (e) {}
    },
  }));
  return <userContext.Provider value={store}>{children}</userContext.Provider>;
};
export const userContext = React.createContext();
