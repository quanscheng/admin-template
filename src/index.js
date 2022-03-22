import "./index.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// BrowserRouter 内使用useRoutes(arr[routes])注册组件
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
