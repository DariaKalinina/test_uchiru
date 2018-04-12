//скрипт
'use srtict';

let sumNumberFirst = $('.sum__number--first');
let sumNumberSecond = $('.sum__number--second');

let strokeFirst = $('.calc__stroke-img--first');
let strokeSecond = $('.calc__stroke-img--second');

let inputFirst = $('.input__number--firstNum');
let inputSecond = $('.input__number--secondNum');
let inputSum = $('.input__number--sum');
let input = $('.input__number');


let numberFirst = randomInteger(6, 9);
let numberSecond = chooseSecondNumber();

//присваивание значений в формуле
sumNumberFirst.text(numberFirst);
sumNumberSecond.text(numberSecond);

drawStroke(numberFirst, strokeFirst);
// inputFirst.css('display', 'block')

drawStroke(numberSecond, strokeSecond);


let totalSum = numberFirst + numberSecond;
console.log('numberFirst = ', numberFirst);
console.log('numberSecond = ', numberSecond);
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

  if (numberFirst === 6) {
    numberSecond = randomInteger(5, 8);
  } else if (numberFirst === 7) {
    numberSecond = randomInteger(4, 7);
  } else if (numberFirst === 8) {
    numberSecond = randomInteger(3, 6);
  } else if (numberFirst === 9) {
    numberSecond = randomInteger(2, 5);
  }

  return numberSecond
}

//функция рандомизатор
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);

  return rand;
}

// функция проверяет верность введенного числа
function validateTrue(elemInput, elemFromEquation) {
  if(+elemInput.val() === elemFromEquation) {
    return true;
  } else {
    return false;
  }
}

// проверка на ввод чисел (ошибка, если вводим не число)
input.on('keypress', function(e) {
  let valNum = e.originalEvent.key;
  if ( parseInt(valNum) !== parseInt(valNum)) {
    input.addClass('error-value');
    return false;
    } else {
    input.removeClass('error');
    return true;
  }
});


//проверка длину содержимого в input и его правильность
$(document).ready(function(){

  $(document).on('change','.input__number--firstNum',function(){
    let isTrue = validateTrue(inputFirst, numberFirst);
    if(isTrue) {
      inputFirst.removeClass('error-value');
      sumNumberFirst.removeClass('error-background');
      return true;
      }
    inputFirst.addClass('error-value');
    sumNumberFirst.addClass('error-background');
    return false;
  });

  $(document).on('change','.input__number--secondNum',function(){
    let isTrue = validateTrue(inputSecond, numberSecond);
    if(isTrue) {
      inputSecond.removeClass('error-value');
      sumNumberSecond.removeClass('error-background');
      return true;
      }
    inputSecond.addClass('error-value');
    sumNumberSecond.addClass('error-background');
    return false;
  });

  $(document).on('change','.input__number--sum',function(){
    let isTrue = validateTrue(inputSum, totalSum);
    if(isTrue) {
      inputSum.removeClass('error-value');
      return true;
      }
    inputSum.addClass('error-value');
    return false;
  });
});


//отправка формы, если все корректно введено
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
