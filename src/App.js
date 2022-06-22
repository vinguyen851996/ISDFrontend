import React,{ useEffect, useState, useContext } from "react";
import { observer } from 'mobx-react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { ProviderStore } from 'store/store'
import {Login} from "pages/Auth/LoginPage";
import {DashboardPage} from 'pages/Dashboard/DashboardPage';
import { userContext } from "store/store";
import { toJS } from "mobx";
const AppPage = () =>{
  const company = useContext(userContext);
  console.log(toJS(useContext(userContext)))
  return (
    <div>
      <Routes>
        <Route path="auth" >
          <Route path="login" element={      
              <Login />                 
          } />
        </Route>
        <Route path="dashboard/*" element={<DashboardPage />} />
    
        <Route index element={<Navigate to="auth/login" replace />} />
      </Routes>
    </div>

  );
}

// export default App;
const App = observer(AppPage);
export { App }
