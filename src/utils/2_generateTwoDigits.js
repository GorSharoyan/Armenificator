//Twos function armenificator
export default function generateTwoDigits(input) {
  const number = Number(input[0]);

  if (input === "10") {
    return "տաս";
  } else {
    switch (number) {
      case 1:
        return "տասն";
      case 2:
        return "քսան";
      case 3:
        return "երեսուն";
      case 4:
        return "քառասուն";
      case 5:
        return "հիսուն";
      case 6:
        return "վաթսուն";
      case 7:
        return "յոթանասուն";
      case 8:
        return "ութանասուն";
      case 9:
        return "իննսուն";
    }
  }
}
