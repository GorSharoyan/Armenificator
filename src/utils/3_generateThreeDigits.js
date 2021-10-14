import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";

//Threes function armenificator
export default function generateThreeDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = "";

  if (generateUnabigous(input[0]) === "մեկ") {
    firstChar += "հարյուր";
  } else {
    firstChar += generateUnabigous(input[0]);
    firstChar += " ";
    firstChar += "հարյուր";
  }

  if (input.substr(1, 2) !== "00") {
    secondChar += generateTwoDigits(input.substr(1, 2));
  }

  result += firstChar;
  result += secondChar;
  return result;
}
