import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigits";

//Fours function armenificator
export default function generateFourDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  if (input[0] === "1") {
    firstChar += "հազար";
  } else {
    firstChar += generateUnabigous(input[0]);
    firstChar += " ";
    firstChar += "hազար";
  }

  secondChar += generateThreeDigit(input.substr(1, 3));

  result += firstChar;
  result += secondChar;
  return result;
}
