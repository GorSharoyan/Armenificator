//Fives  function armenificator

import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";

export default function generateFiveDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  firstChar += generateTwoDigits(input.substr(0, 1));
  firstChar += " ";
  firstChar += "հազար";

  secondChar += generateThreeDigit(input.substr(2, 4));

  result += firstChar;
  result += secondChar;
  return result;
}
