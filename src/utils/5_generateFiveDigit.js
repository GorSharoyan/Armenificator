//Fives  function armenificator

import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";
import generateFourDigit from "./4_generateFourDigit";

export default function generateFiveDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  firstChar += generateTwoDigits(input.substr(0, 2));
  firstChar += " ";
  firstChar += "հազար";

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
