import "./App.css";
import "@shopify/polaris/build/esm/styles.css";

import { AppProvider } from "@shopify/polaris";
import { BrowserRouter } from "react-router-dom";
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
        <Main />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
