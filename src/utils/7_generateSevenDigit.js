//Sevens function armenificator

import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";
import generateFiveDigit from "./5_generateFiveDigit";
import generateSixDigit from "./6_gnereateSixDigit";

export default function generateSevenDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  firstChar += generateUnabigous(input[0]);
  firstChar += " ";
  firstChar += "միլիոն";
  firstChar += " ";

  if (input.substr(1, 3) !== "000") {
    if (input[1] === "0") {
      secondChar += generateFiveDigit(input.substr(2, 6));
    } else {
      secondChar += generateSixDigit(input.substr(1, 6));
    }
  } else {
    secondChar += generateThreeDigit(input.substr(4, 6));
  }

  result += firstChar;
  result += secondChar;
  return result;
}
