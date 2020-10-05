module.exports = function toReadable(number) {
  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
    200: 'two hundred',
    300: 'three hundred',
    400: 'four hundred',
    500: 'five hundred',
    600: 'six hundred',
    700: 'seven hundred',
    800: 'eight hundred',
    900: 'nine hundred'
  };

  let resultArr = [];
  let resultStr = "";
  let strOnes = "";
  let strTens = "";
  let strHundrets = "";
  let numberArr = number.toString().split("").reverse();

  if (numberArr.length === 3 && numberArr[0] !== "0") {                                          //for hundrets
    strOnes = numbers[numberArr[0]];
    strTens = numbers[numberArr[1] + "0"];
    strHundrets = numbers[numberArr[2] + "00"];
    resultStr = strHundrets + " " + strTens + " " + strOnes;
  };

  if (numberArr.length === 2 && numberArr[1] !== "1" && numberArr[0] !== "0") {     //for tens
    strOnes = numbers[numberArr[0]];
    strTens = numbers[numberArr[1] + "0"];
    resultStr = strTens + " " + strOnes;
  };

  if (numberArr.length === 1) {                                                    //for ones
    resultStr = numbers[numberArr[0]];
  };

  if (numberArr.length === 2 && numberArr[0] === "0") {                           //for tens like 10, 20.....
    resultStr = numbers[numberArr.reverse().join("")];
  };

  if (numberArr.length === 3 && numberArr[0] === "0") {                           //for hundreds like 110, 250 ........
    strHundrets = numbers[numberArr[2] + "00"];
    strTens = numbers[numberArr[1] + "0"];
    resultStr = strHundrets + " " + strTens;
  };

  if (numberArr.length === 3 && numberArr[0] !== "0" && numberArr[1] === "0") {     //for hundred like 105, 205.......
    strOnes = numbers[numberArr[0]];
    strHundrets = numbers[numberArr[2] + "00"];
    resultStr = strHundrets + " " + strOnes;
  };

  if (numberArr.length === 2 && numberArr[1] === "1" && numberArr[0] !== "0") {         //for tens from 11 to 19
    resultStr = numbers[numberArr.reverse().join("")];
  };

  if (numberArr.length === 3 && numberArr[1] === "1" && numberArr[0] !== "0") {          //for hundrets like 512, 818 .......
    strHundrets = numbers[numberArr[2] + "00"];
    resultArr.push(numberArr[1]);
    resultArr.push(numberArr[0]);
    resultStr = strHundrets + " " + numbers[resultArr.join("")];
  };

  if (numberArr.length === 3 && numberArr[0] === "0" && numberArr[1] === "0") {              //for hundets like 100, 500 .....
    resultStr = numbers[numberArr.reverse().join("")];
  };

  return resultStr;
}
