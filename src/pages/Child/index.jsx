import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const Child = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location: ", location);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

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
