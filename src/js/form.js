//скрипт
'use srtict';

let sumNumberFirst = $('.sum__number--first');
let sumNumberSecond = $('.sum__number--second');
let question = $('.sum__number--question');

let strokeFirst = $('.calc__stroke-img--first');
let strokeSecond = $('.calc__stroke-img--second');

let inputFirst = $('.input__number--firstNum');
let inputSecond = $('.input__number--secondNum');
let inputSum = $('.input__number--sum');

let numberFirst = randomInteger(6, 9);
let numberSecond = chooseSecondNumber();
let totalSum = numberFirst + numberSecond;

//присваивание значений в формуле
sumNumberFirst.text(numberFirst);
sumNumberSecond.text(numberSecond);

drawStroke(numberFirst, strokeFirst);
inputFirst.css('display', 'block');

//проверка длину содержимого в input и его правильность
$(document).on('change','.input__number--firstNum',function(){
  let isTrue = validateTrue(inputFirst, numberFirst);
  if(isTrue) {
    inputFirst.removeClass('error-value');
    sumNumberFirst.removeClass('error-background');
    inputFirst.removeClass('input__number--border');
    inputFirst.prop('readonly', true);
    drawStroke(numberSecond, strokeSecond);
    inputSecond.css('display', 'block');
    return true;
    }
  inputFirst.addClass('error-value');
  // inputFirst.addClass('input__number--border');
  sumNumberFirst.addClass('error-background');
  return false;
});

$(document).on('change','.input__number--secondNum',function(){
  let isTrue = validateTrue(inputSecond, numberSecond);
  if(isTrue) {
    inputSecond.removeClass('error-value');
    sumNumberSecond.removeClass('error-background');
    inputSecond.removeClass('input__number--border');
    inputSecond.prop('readonly', true);
    question.css('display', 'none');
    inputSum.css('display', 'block');
    return true;
    }
  inputSecond.addClass('error-value');
  // inputSecond.addClass('input__number--border');
  sumNumberSecond.addClass('error-background');
  return false;
});

$(document).on('change','.input__number--sum',function(){
  let isTrue = validateTrue(inputSum, totalSum);
  if(isTrue) {
    inputSum.removeClass('error-value');
    inputSum.removeClass('input__number--border');
    inputSum.prop('readonly', true);
    return true;
    }
  inputSum.addClass('error-value');
  return false;
});


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
function isNumber(inputName) {
  inputName.on('keypress', function(e) {
    let valNum = e.originalEvent.key;
    if ( parseInt(valNum) !== parseInt(valNum)) {
      inputName.addClass('error-value');
      return false;
      } else {
      inputName.removeClass('error-value');
      return true;
    }
  });
}
//выполнение проверки для всех input
isNumber(inputFirst);
isNumber(inputSecond);
isNumber(inputSum);
