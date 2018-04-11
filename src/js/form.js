//скрипт
'use srtict';

let sumNumberFirst = $('.sum__number--first');
let sumNumberSecond = $('.sum__number--second');

let strokeFirst = $('.calc__stroke-img--first');
let strokeSecond = $('.calc__stroke-img--second');

let inputFirst = $('.input__number--firstNum');
let inputSecond = $('.input__number--secondNum');
let inputSum = $('.input__number--sum');


let firstNumber = randomInteger(6, 9);
let secondNumber = chooseSecondNumber();

//присваивание значений в формуле
sumNumberFirst.text(firstNumber);
sumNumberSecond.text(secondNumber);

drawStroke(firstNumber, strokeFirst);
inputFirst.css('display', 'block')

drawStroke(secondNumber, strokeSecond);


let totalSum = firstNumber + secondNumber;
console.log('firstNumber = ', firstNumber);
console.log('secondNumber = ', secondNumber);
console.log('totalSum = ', totalSum);

//отрисовка стрелок
function drawStroke(number, elem) {
  let weightValue = number * 39;
  let heightValue = number * 10;
  let urlValue = 'url(../img/stroke-' + number + '.svg) center center no-repeat';
  //вычисление ширины и высоты блока, числа взяты из пропорции у шкале из макета
  elem.css({ background: urlValue });
  elem.css({ width: weightValue + 'px' });
  elem.css({ height: heightValue + 'px' });

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






// let iFirst = $('.input__number--firstNum');
// let iSecond = $('.input__number--SecondNum');
// let iSum = $('.input__number--sum');
// let input = $('.input__number');
//
// // функция проверяет длину введенного текста
// function validateLength(elem, length) {
//   if(elem.val().length >= length) {
//     return true;
//   }
//   return false;
// }
//
// // проверка на ввод чисел (ошибка, если вводим не число)
// input.on('keypress', function(e) {
//   var valNum = e.originalEvent.key;
//   if ( parseInt(valNum) !== parseInt(valNum)) {
//     input.addClass('error-value');
//     input.addClass('error-value');
//     return false;
//     } else {
//     inputNumber.removeClass('error');
//     return true;
//   }
// });




// проверка длину содержимого в input
// $(document).ready(function(){
//
//   $(document).on('change','.card__person',function(){
//     var isLenght = validateLength(inputPerson, 4);
//     if(isLenght) {
//       inputPerson.removeClass('error');
//       return true;
//       }
//     inputPerson.addClass('error');
//     return false;
//   });
//
//
// });

// функция валидации формы - проверяет, чтобы все поля были введены
// function validateForm() {
//   var person = inputPerson.val();
//   var cvc = inputCVV.val();
//   for (var i = 0; i < inputNumber.length; i++) {
//     var num = inputNumber[i].value;
//     if(num.length<4) return false;
//   }
//   if(person.length<4) return false;
//   if(cvc.length<3) return false;
//   return true;
// }

// отправка формы, если все корректно введено
// $('#submit').on('click', function(e) {
//   var isValidForm = validateForm();
//   if (isValidForm) {
//     $('#form').on('submit', function (e) {
//       console.log('ok');
//     });
//   } else{
//     e.preventDefault();
//     console.log('no ok');
//   }
// });
