import { ThemeProvider as ThemeProviderV5 } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LayoutProvider } from "./components/Core/context/LayoutContext";
import { UserProvider } from "./components/Core/context/UserContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { ManagementProvider } from './components/Core/context/ManagementContext';
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { ProviderStore } from "store/store";
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext,
} from "./components/Core/context/ThemeContext";
import { MaintainSession } from "./utils/common";

MaintainSession();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LayoutProvider>
    <UserProvider>
      <StyledEngineProvider injectFirst>
        <ThemeChangeProvider>
          <ThemeStateContext.Consumer>
            {(theme) => (
              <ThemeProviderV5 theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                  <ProviderStore>
                    <App />
                  </ProviderStore>
                </BrowserRouter>
              </ThemeProviderV5>
            )}
          </ThemeStateContext.Consumer>
        </ThemeChangeProvider>
      </StyledEngineProvider>
    </UserProvider>
  </LayoutProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
