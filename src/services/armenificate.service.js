//helpers
import generateUnabigous from "../utils/1_generateUnabigous";
import generateTwoDigits from "../utils/2_generateTwoDigits";
import generateThreeDigit from "../utils/3_generateThreeDigit";
import generateFourDigit from "../utils/4_generateFourDigit";
import generateFiveDigit from "../utils/5_generateFiveDigit";
import generateSixDigit from "../utils/6_gnereateSixDigit";
import generateSevenDigit from "../utils/7_generateSevenDigit";
import generateEigthDigit from "../utils/8_generateEigthDigit";
import generateNineDigit from "../utils/9_generateNineDigit";

export default function armenificate(str) {
  switch (str.length) {
    case 0:
      return "";
    case 1:
      return generateUnabigous(str);
    case 2:
      return generateTwoDigits(str);
    case 3:
      return generateThreeDigit(str);
    case 4:
      return generateFourDigit(str);
    case 5:
      return generateFiveDigit(str);
    case 6:
      return generateSixDigit(str);
    case 7:
      return generateSevenDigit(str);
    case 8:
      return generateEigthDigit(str);
    case 9:
      return generateNineDigit(str);
    default:
      return "ետ մի բաննել ձեռով արա )))";
  }
}
