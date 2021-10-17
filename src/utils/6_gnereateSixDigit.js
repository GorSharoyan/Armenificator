//Sixs function armenificator

import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";

export default function generateSixDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";
  console.log(input);

  //first char generation
  if (input.substr(0, 3) !== "000") {
    if (input[2] === "1") {
      firstChar += "հազար";
    } else {
      firstChar += generateThreeDigit(input.substr(0, 3));
      firstChar += " ";
      firstChar += "հազար";
    }
  }

  //second char generation
  if (input.substr(3, 5) !== "000") {
    if (input[3] === "0") {
      secondChar += generateTwoDigits(input.substr(4, 5));
    } else {
      secondChar += generateThreeDigit(input.substr(3, 5));
    }
  }

  result += firstChar;
  result += secondChar;
  return result;
}
