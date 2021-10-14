import "./App.css";
import React from "react";
import { useState } from "react";

//helpers
import generateUnabigous from "./utils/1_generateUnabigous";
import generateTwoDigits from "./utils/2_generateTwoDigits";
import generateThreeDigit from "./utils/3_generateThreeDigits";

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
        result += generateTwoDigits(str);
        result += generateUnabigous(str[1]);
        break;
      case 3:
        result += generateThreeDigit(str[0]);
        result += " ";
        result += generateTwoDigits(str[1]);
        result += generateUnabigous(str[2]);
        break;
      case 4:
        result += generateFourDigit(str[0]);
        result += " ";
        result += generateThreeDigit(str[1]);
        result += " ";
        //result += generateCustomTwoDigit(str[2]);
        //result += generateUnabigous(str[3]);
        break;
      case 5:
        result += generateFourDigit(str.substr(0, 2));
        result += " ";
        //result += generateCustomTwoDigit(str[2]);
        result += generateUnabigous(str[3]);
    }

    //Unique cases
    // for (let i = 0; i < uniques.length; i++) {
    //   if (result === uniques[i]) {
    //     generateUniqueNumber(result);
    //   } else {
    //     return result;
    //   }
    // }
    return result;
  }

  //Fours function armenificator
  function generateFourDigit(input) {
    const number = Number(input);
    console.log("input:", input);
    switch (input.length) {
      case 1:
        if (number === 1) {
          return "հազար ";
        } else {
          return generateUnabigous(number) + " " + "հազար ";
        }
      case 2:
      // const result = "";
      // result += genereateTwoDigits(number, result) + " " + "հազար ";
      // return result;
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
