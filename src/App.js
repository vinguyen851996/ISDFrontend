import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { UserProvider } from "store/store";
import { Login } from "pages/Auth/LoginPage";
import Header from "components/Core/Header/Header";
import { DashboardPage } from "pages/Dashboard/DashboardPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route
            path="login"
            element={
              <UserProvider>
                <Login />
              </UserProvider>
            }
          />
        </Route>
        <Route
          path="dashboard/*"
          element={
            <UserProvider>
              <DashboardPage />
            </UserProvider>
          }
        >
          <Route path="dashboard/*" element={<DashboardPage />} />
          {/* <Route path="dashboard" >
          <Route path="index" element={<DashboardPage/> } />
        </Route> */}
        </Route>
        <Route index element={<Navigate to="auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
