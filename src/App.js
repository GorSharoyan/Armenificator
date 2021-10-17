import "./App.css";
import React from "react";
import { useState } from "react";

//helpers
import generateUnabigous from "./utils/1_generateUnabigous";
import generateTwoDigits from "./utils/2_generateTwoDigits";
import generateThreeDigit from "./utils/3_generateThreeDigit";
import generateFourDigit from "./utils/4_generateFourDigit";
import generateFiveDigit from "./utils/5_generateFiveDigit";
import generateSixDigit from "./utils/6_gnereateSixDigit";
import generateSevenDigit from "./utils/7_generateSevenDigit";
import generateEigthDigit from "./utils/8_generateEigthDigit";

function App() {
  const [value, setValue] = useState("");

  //basic input change function
  const handleInputChange = (val) => {
    const input = val.target.value;

    setValue(armenificate(input));
  };

  //main armenification function
  function armenificate(str) {
    switch (str.length) {
      case 1:
        return generateUnabigous(str);
      case 2:
        return generateTwoDigits(str);
      case 3:
        return generateThreeDigit(str);
      case 4:
        return generateFourDigit(str);
      case 5:
        return generateFiveDigit(str);
      case 6:
        return generateSixDigit(str);
      case 7:
        return generateSevenDigit(str);
      case 8:
        return generateEigthDigit(str);
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
