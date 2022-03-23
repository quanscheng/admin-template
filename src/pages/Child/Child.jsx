import { useLocation, useNavigate } from "react-router-dom";

import React from "react";

const Child = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location: ", location);

  return (
    <>
      <h3>Child</h3>
      <header className="App-header">
        <p>
          Edit <code>src/App.js123</code> and save to reload.
        </p>
 
        <button onClick={() => navigate(-1)}>回退</button>
      </header>
    </>
  );
};

export default Child;
