import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (value) => {
    setValue(value.target.value);
  };

  return (
    <div>
      <div className="App">
        <input type="number" onChange={handleInputChange}></input>
      </div>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default App;
