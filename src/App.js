import "./App.css";
import React from "react";
import { useState } from "react";

//helpers
import generateUnabigous from "./utils/1_generateUnabigous";
import generateTwoDigits from "./utils/2_generateTwoDigits";
import generateThreeDigit from "./utils/3_generateThreeDigits";
import generateFourDigit from "./utils/4_generateFourDigit";

function App() {
  const [value, setValue] = useState("");

  //basic input change function
  const handleInputChange = (val) => {
    const input = val.target.value;

    setValue(armenificate(input));
  };

  //main armenification function
  function armenificate(str) {
    let result = "";
    switch (str.length) {
      case 1:
        return generateUnabigous(str);
      case 2:
        return generateTwoDigits(str);
      case 3:
        return generateThreeDigit(str);
      case 4:
        result += generateFourDigit(str);
        result += " ";
        result += generateThreeDigit(str[1]);
        result += " ";
        result += generateTwoDigits(str[2]);
        result += generateUnabigous(str[3]);
        break;
      case 5:
        result += generateFourDigit(str);
        result += " ";
        result += generateThreeDigit(str[1]);
        result += " ";
        result += generateTwoDigits(str[2]);
        result += generateUnabigous(str[3]);
    }

    return result;
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
