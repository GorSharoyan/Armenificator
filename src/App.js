import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  //basic input change function
  const handleInputChange = (val) => {
    const input = val.target.value;
    armenificate(input);
  };

  //main armenification function
  function armenificate(str) {
    let result = "";
    switch (str.length) {
      case 1:
        result += generateUnabigous(str);
    }
    return result;
  }

  //Ones function armenificatior
  function generateUnabigous(input) {
    const number = Number(input);
    console.log("debugged");
    console.log(number);

    switch (input) {
      case 0:
        return "զրո";
      case 1:
        return "մեկ";
      case 2:
        return "երկու";
      case 3:
        return "երեք";
      case 4:
        return "չորս";
      case 5:
        return "հինգ";
      case 6:
        return "վեց";
      case 7:
        return "յոթ";
      case 8:
        return "ութ";
      case 9:
        return "ինը";
    }
  }

  return (
    <div>
      <div className="App">
        <input type="number" onChange={handleInputChange}></input>
      </div>
      <div>
        <h1>{value}</h1>
      </div>
    </div>
  );
}

export default App;
