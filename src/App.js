import "./App.css";
import React from "react";
import { useState } from "react";

//helpers
import generateUnabigous from "./utils/generateUnabigous";

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
        result += generateUnabigous(str);
        break;
      case 2:
        result += genereateTwoDigits(str, result);
        break;
      case 3:
        result += generateThreeDigit(str[0]);
        result += " ";
        result += generateCustomTwoDigit(str[1]);
        result += generateUnabigous(str[2]);
        break;
      case 4:
        result += generateFourDigit(str[0]);
        result += " ";
        result += generateThreeDigit(str[1]);
        result += " ";
        result += generateCustomTwoDigit(str[2]);
        result += generateUnabigous(str[3]);
        break;
      case 5:
        result += generateFourDigit(str.substr(0, 2));
        result += " ";
        result += generateCustomTwoDigit(str[2]);
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

  //Twos function armenificator
  function generateCustomTwoDigit(input) {
    const number = Number(input);
    switch (number) {
      case 1:
        return "տասն";
      case 2:
        return "քսան";
      case 3:
        return "երեսուն";
      case 4:
        return "քառասուն";
      case 5:
        return "հիսուն";
      case 6:
        return "վաթսուն";
      case 7:
        return "յոթանասուն";
      case 8:
        return "ութանասուն";
      case 9:
        return "իննսուն";
    }
  }

  function genereateTwoDigits(input) {
    let number = Number(input);
    let uniques = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    for (let i = 0; i < uniques.length; i++) {
      if (number === uniques[i]) {
        return generateUniqueTwoDigit(input);
      } else {
        return generateCustomTwoDigit(input[0]);
      }
    }
  }

  //Unique Twos number debug function
  function generateUniqueTwoDigit(input) {
    const number = Number(input);
    switch (number) {
      case 10:
        return "տաս";
      case 20:
        return "քսան";
      case 30:
        return "երեսուն";
      case 40:
        return "քառասուն";
      case 50:
        return "հիսուն";
      case 60:
        return "վաթսուն";
      case 70:
        return "յոթանասուն";
      case 80:
        return "ութանասուն";
      case 90:
        return "իննսուն";
    }
  }

  //Threes function armenificator
  function generateThreeDigit(input) {
    const number = Number(input);

    if (number === 1) {
      return "հարյուր ";
    } else {
      return generateUnabigous(number) + " " + "հարյուր ";
    }
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
