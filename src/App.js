import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
