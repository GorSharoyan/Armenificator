//Sevens function armenificator

import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";
import generateFourDigit from "./4_generateFourDigit";
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

  //   if (input.substr(4, 6) !== "000") {
  //     if (input[4] === "0") {
  //       secondChar += generateTwoDigits(input.substr(5, 6));
  //     } else {
  //       secondChar += generateThreeDigit(input.substr(4, 6));
  //     }
  //   }
  secondChar += generateSixDigit(input.substr(1, 6));

  result += firstChar;
  result += secondChar;
  return result;
}
