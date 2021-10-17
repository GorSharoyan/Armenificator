//Sixs function armenificator

import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";

export default function generateSixDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  firstChar += generateThreeDigit(input.substr(0, 3));
  firstChar += " ";
  firstChar += "հազար";
  firstChar += " ";

  console.log(input.substr(4, 5));
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
