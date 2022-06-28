import { createBrowserHistory } from "history";
import { observer } from "mobx-react";
import { Login } from "pages/Auth/LoginPage";
import { DashboardPage } from "pages/Dashboard/DashboardPage";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { userContext } from "store/store";
export const history = createBrowserHistory();
const AppPage = () => {
  const company = useContext(userContext);
  // console.log(toJS(company));
  return (
    <div>
      <Routes>
        {/* {!_.isEmpty(toJS(company.signInUser)) && !_.isEmpty(toJS(company.signInUser.token)) ?
          ( */}
        <React.Fragment>
          <Route path="dashboard/*" element={<DashboardPage />} />

          <Route path="/" element={<Navigate to="auth/login" replace />} />
        </React.Fragment>

        {/* )
          :
          ( */}
        <React.Fragment>
          <Route path="auth">
            <Route path="login" element={<Login />} />
          </Route>
          <Route index element={<Navigate to="auth/login" replace />} />
        </React.Fragment>

        {/* )
        } */}
      </Routes>
    </div>
  );
};

// export default App;
const App = observer(AppPage);
export { App };
