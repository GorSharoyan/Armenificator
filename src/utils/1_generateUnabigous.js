//Ones function armenificatior
export default function generateUnabigous(input) {
  const number = Number(input);
  switch (number) {
    case 0:
      return "զրո";
    case 1:
      return "մեկ";
    case 2:
      return "երկու";
    case 3:
      return "երեք";
    case 4:
      return "չորս";
    case 5:
      return "հինգ";
    case 6:
      return "վեց";
    case 7:
      return "յոթ";
    case 8:
      return "ութ";
    case 9:
      return "ինը";
  }
}
