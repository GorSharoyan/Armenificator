import generateUnabigous from "./1_generateUnabigous";
import generateTwoDigits from "./2_generateTwoDigits";

//Fours function armenificator
export default function generateFourDigit(input) {
  const number = Number(input[0]);
  console.log(input);
  console.log(number);
  let result = "";
  switch (input.length) {
    case 4:
      if (number === 1) {
        result += "հազար";
      } else {
        result += generateUnabigous(number) + " " + "հազար";
      }
    case 5:
      result += generateTwoDigits(input.substr(0, 2));
      result += "հազար";
  }
}
