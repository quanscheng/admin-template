import "./App.css";
import "@shopify/polaris/build/esm/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppProvider } from "@shopify/polaris";
import { Login } from "./pages/Login/Login";
import Main from "./pages/main";
import { RecoilRoot } from "recoil";
import { polaris_link } from "./utils/polaris_link";

function App() {
  return (
    <RecoilRoot>
      <AppProvider linkComponent={polaris_link}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </RecoilRoot>
  );
}

export default App;
