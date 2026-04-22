import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const calculate = async () => {
    const res = await fetch("http://localhost:5000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ num1, num2, operation })
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculator</h1>

      <input value={num1} onChange={(e)=>setNum1(e.target.value)} />
      <input value={num2} onChange={(e)=>setNum2(e.target.value)} />

      <select onChange={(e)=>setOperation(e.target.value)}>
        <option value="add">+</option>
        <option value="sub">-</option>
        <option value="mul">*</option>
        <option value="div">/</option>
      </select>

      <button onClick={calculate}>Calculate</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;