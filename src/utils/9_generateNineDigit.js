//Nine digit armenificatior function

import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";
import generateSixDigit from "./6_gnereateSixDigit";

export default function generateNineDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  //first char generation
  firstChar += generateThreeDigit(input.substr(0, 3));
  firstChar += " ";
  firstChar += "միլիոն";

  //second cahr geeneration
  secondChar += generateSixDigit(input.substr(3, 8));

  result += firstChar;
  result += secondChar;
  return result;
}
