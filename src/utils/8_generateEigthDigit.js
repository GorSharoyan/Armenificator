//Eight digit armenificatior function

import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";
import generateFourDigit from "./4_generateFourDigit";
import generateFiveDigit from "./5_generateFiveDigit";
import generateSixDigit from "./6_gnereateSixDigit";

export default function generateEigthDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  firstChar += generateTwoDigits(input.substr(0, 2));
  firstChar += " ";
  firstChar += "միլիոն";

  // if (input.substr(5, 7) !== "000") {
  //   if (input[5] === "0") {
  //     secondChar += generateTwoDigits(input.substr(6, 7));
  //   } else {
  //     secondChar += generateThreeDigit(input.substr(5, 7));
  //   }
  // }
  secondChar += generateSixDigit(input.substr(2, 7));

  result += firstChar;
  result += secondChar;
  return result;
}
