//Eight digit armenificatior function

import generateTwoDigits from "./2_generateTwoDigits";
import generateSixDigit from "./6_gnereateSixDigit";

export default function generateEigthDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  //first Char generation
  firstChar += generateTwoDigits(input.substr(0, 2));
  firstChar += " ";
  firstChar += "միլիոն";

  // second Char genreation
  secondChar += generateSixDigit(input.substr(2, 7));

  result += firstChar;
  result += secondChar;
  return result;
}
