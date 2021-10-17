//Sevens function armenificator

import generateUnabigous from "./1_generateUnabigous";
import generateSixDigit from "./6_gnereateSixDigit";

export default function generateSevenDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  //first char generation
  firstChar += generateUnabigous(input[0]);
  firstChar += " ";
  firstChar += "միլիոն";

  //second cahr geeneration
  secondChar += generateSixDigit(input.substr(1, 6));

  result += firstChar;
  result += secondChar;
  return result;
}
