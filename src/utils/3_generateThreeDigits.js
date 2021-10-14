import generateUnabigous from "./1_generateUnabigous";

//Threes function armenificator
export default function generateThreeDigit(input) {
  const number = Number(input);

  if (number === 1) {
    return "հարյուր ";
  } else {
    return generateUnabigous(number) + " " + "հարյուր ";
  }
}

// export function checkDigitEnding(input) {
//   const ending = input.substr(1);
//   if (ending === "00") {
//     return generateUnabigous(number) + " " + "հարյուր ";
//   } else {
//     generateThreeDigit(input[0]);
//   }
// }
