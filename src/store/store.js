import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import * as services from './service';


export const UserProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    company: [],
    async getCompany(username) {
      try {
        const {data}= await services.companyList(username);
        console.log(data);
        store.company = data;
      } catch (e) {
        store.setError(e);
      }
    },

  }));
  return <userContext.Provider value={store}>{children}</userContext.Provider>;
};
export const userContext = React.createContext();


