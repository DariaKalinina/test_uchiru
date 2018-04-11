//скрипт
'use srtict';

let firstNumber = null;
let secondNumber = null;
let totalSum = null;

let sumNumberFirst = document.querySelector('.sum__number--first');
let sumNumberSecond = document.querySelector('.sum__number--second');
console.log(sumNumberFirst.textContent);
console.log(sumNumberSecond.textContent);

let strokeFirst = document.querySelector('.calc__stroke-img--first');
let strokeSecond = document.querySelector('.calc__stroke-img--second');

firstNumber = randomInteger(6, 9);
secondNumber = chooseSecondNumber();
sumNumberFirst.textContent = firstNumber;
sumNumberSecond.textContent = secondNumber;
drawStroke(firstNumber, strokeFirst);

drawStroke(secondNumber, strokeSecond);


totalSum = firstNumber + secondNumber;
console.log('firstNumber = ', firstNumber);
console.log('secondNumber = ', secondNumber);
console.log('totalSum = ', totalSum);

//отрисовка стрелок
function drawStroke(number, elem) {
  //вычисление ширины и высоты блока, числа взяты из пропорции у шкале из макета
  elem.style.background = "url(../img/stroke-"+number+".svg) center center no-repeat";
  elem.style.width = (number*39)+"px";
  elem.style.height = (number*10)+"px";

  return true;
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
