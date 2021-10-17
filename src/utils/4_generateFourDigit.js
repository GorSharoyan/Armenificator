import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";
import generateThreeDigit from "./3_generateThreeDigit";

//Fours function armenificator
export default function generateFourDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = "";

  if (input[0] === "1") {
    firstChar += "հազար";
  } else {
    firstChar += generateUnabigous(input[0]);
    firstChar += " ";
    firstChar += "hազար";
    firstChar += " ";
  }

  if (input.substr(1, 3) !== "000") {
    if (input[1] === "0") {
      secondChar += generateTwoDigits(input.substr(2, 3));
    } else {
      secondChar += generateThreeDigit(input.substr(1, 3));
    }
  }

  result += firstChar;
  result += secondChar;
  return result;
}
