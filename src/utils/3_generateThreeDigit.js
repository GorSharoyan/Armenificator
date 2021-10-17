import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";

//Threes function armenificator
export default function generateThreeDigit(input) {
  let result = "";
  let firstChar = "";
  let secondChar = " ";

  switch (input[0]) {
    case "0":
      firstChar += " ";
      break;
    case "1":
      firstChar += "հարյուր";
      break;
    default:
      firstChar += generateUnabigous(input[0]);
      firstChar += " ";
      firstChar += "հարյուր";
      break;
  }

  if (input.substr(1, 2) !== "00") {
    if (input[1] === "0") {
      secondChar += generateUnabigous(input[2]);
    } else {
      secondChar += generateTwoDigits(input.substr(1, 2));
    }
  }

  result += firstChar;
  result += secondChar;
  return result;
}
