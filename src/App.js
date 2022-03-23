import "./App.css";
import "@shopify/polaris/build/esm/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProvider } from "@shopify/polaris";
import { Login } from "./pages/Login/Login";
import Main from "./pages/main";
import logo from "./assets/img/logo.svg";
import { polaris_link } from "./utils/polaris_link";

function App() {
  const theme = {
    logo: {
      width: 120,
      topBarSource: logo,
      url: "/",
      accessibilityLabel: "PMP",
      contextualSaveBarSource: logo,
    },
  };

  return (
    <AppProvider theme={theme} linkComponent={polaris_link}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
