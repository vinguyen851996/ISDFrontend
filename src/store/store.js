import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import * as services from "./service";
import { useNavigate } from "react-router-dom";

export const UserProvider = ({ children }) => {
  let navigate = useNavigate();
  const store = useLocalObservable(() => ({
    company: [],
    saleCode: [],

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
        // console.log(data)
        const result = await services.login(data);
        console.log(result);
        localStorage.setItem("user_session", JSON.stringify(result.data.token));
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
