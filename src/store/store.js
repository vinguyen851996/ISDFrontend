import React, { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import * as services from "./service";
import { useNavigate } from "react-router-dom";
import { clearUserSession, setUserSession } from "../utils/localStorageHelper";

export const ProviderStore = ({ children }) => {
  let user = {};
  if (localStorage.getItem("user_session")) {
    user = JSON.parse(localStorage.getItem("user_session"));
  }

  let navigate = useNavigate();
  const store = useLocalObservable(() => ({
    company: [],
    saleCode: [],
    userLogin: user,
    signInUser: {},
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
        console.log(result);
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
          permission: result.data.permission.menuModel,
          webPermission: result.data.webPermission,
        };
        store.signInUser = userSession;
        setUserSession(userSession);
        // console.log(setUserSession);
        navigate("../../Dashboard/index", { replace: true });
      } catch (e) {}
    },

    async saleORG(userName, companyCode) {
      try {
        const { data } = await services.saleORG(userName, companyCode);
        // console.log(data);
        store.saleCode = data;
      } catch (e) {}
    },
    async signOutStore() {
      try {
        clearUserSession("user_session");
        // navigate("../../auth/login", { replace: true });
      } catch (e) {}
    },
  }));
  return <userContext.Provider value={store}>{children}</userContext.Provider>;
};
export const userContext = createContext();
