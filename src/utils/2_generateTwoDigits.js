import generateUnabigous from "./1_generateUnabigous";

//Twos function armenificator
export default function generateTwoDigits(input) {
  const number = Number(input[0]);
  console.log(input);
  //char&result declaration
  let result = "";
  let firstChar = "";
  let secondChar = "";

  //firstChar generation
  if (input === "10") {
    return "տաս";
  } else {
    switch (number) {
      case 1:
        firstChar += "տասն";
        break;
      case 2:
        firstChar += "քսան";
        break;
      case 3:
        firstChar += "երեսուն";
        break;
      case 4:
        firstChar += "քառասուն";
        break;
      case 5:
        firstChar += "հիսուն";
        break;
      case 6:
        firstChar += "վաթսուն";
        break;
      case 7:
        firstChar += "յոթանասուն";
        break;
      case 8:
        firstChar += "ութանասուն";
        break;
      case 9:
        firstChar += "իննսուն";
        break;
    }

    //SecondChar generation

    if (input[1] !== "0" && input[1] !== "1") {
      secondChar += generateUnabigous(input[1]);
    }
    //result concat
    result += firstChar;
    result += secondChar;
    return result;
  }
}
