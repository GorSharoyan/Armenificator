//Fives  function armenificator

import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";

export default function generateFiveDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  firstChar += generateTwoDigits(input.substr(0, 2));
  firstChar += " ";
  firstChar += "հազար";
  firstChar += " ";

  if (input.substr(2, 4) !== "000") {
    if (input[2] === "0") {
      secondChar += generateTwoDigits(input.substr(3, 4));
    } else {
      secondChar += generateThreeDigit(input.substr(2, 4));
    }
  }

  result += firstChar;
  result += secondChar;
  return result;
}
