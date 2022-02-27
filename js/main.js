/*
  Описание функции: Получение случайного числа в диапозоне 'от' и 'до' включительно
  Источник: MDN
  Ссылка: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomIntInclusive(minValue, maxValue) {
  if (minValue > maxValue) {
    return 'Начальный индекс диапозона не может быть больше конечного индекса';
  }
  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
} getRandomIntInclusive(1, 3)

/*
  Описание функции: Функция для проверки максимальной длины строки
*/
function isMaxLengthString(inputString, maxLength) {
  return inputString.length <= maxLength;
} isMaxLengthString('inputString', 10)
