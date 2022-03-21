import "./App.css";

import { routes } from "./configs/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const elements = useRoutes(routes);

  return <div className="App">{elements}</div>;
}

export default App;
