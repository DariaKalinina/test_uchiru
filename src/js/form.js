//скрипт
'use srtict';

let firstNumber = null;
let secondNumber = null;
let totalSum = null;

let sumNumberFirst = document.querySelector('.sum__number--first');
let sumNumberSecond = document.querySelector('.sum__number--second');
console.log(sumNumberFirst);
console.log(sumNumberSecond);

let strokeFirst = document.querySelector('.calc__stroke-img--first');
let strokeSecond = document.querySelector('.calc__stroke-img--second');

firstNumber = randomInteger(6, 9);
//вычисление ширины и высоты блока, числа взяты из пропорции у шкале из макета
strokeFirst.style.background = "url(../img/stroke-"+firstNumber+".svg) center center no-repeat";
strokeFirst.style.width = (firstNumber*39)+"px";
strokeFirst.style.height = (firstNumber*10)+"px";

secondNumber = chooseSecondNumber();
//вычисление ширины и высоты блока, числа взяты из пропорции у шкале из макета
strokeSecond.style.background = "url(../img/stroke-"+secondNumber+".svg) center center no-repeat";
strokeSecond.style.width = (secondNumber*39)+"px";
strokeSecond.style.height = (secondNumber*10)+"px";

totalSum = firstNumber + secondNumber;
console.log('firstNumber = ', firstNumber);
console.log('secondNumber = ', secondNumber);
console.log('totalSum = ', totalSum);

function drawStroke(number) {

}

//выбор второго числв
function chooseSecondNumber() {

  if (firstNumber === 6) {
    secondNumber = randomInteger(5, 8);
  } else if (firstNumber === 7) {
    secondNumber = randomInteger(4, 7);
  } else if (firstNumber === 8) {
    secondNumber = randomInteger(3, 6);
  } else if (firstNumber === 9) {
    secondNumber = randomInteger(2, 5);
  }

  return secondNumber
}

//функция рандомизатор
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);

  return rand;
}
