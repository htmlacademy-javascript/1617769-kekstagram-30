/* eslint-disable radix */
// задание 1

const checkLengthString = (string, length) => string.length <= length;

checkLengthString('проверяемая строка', 10);

// задание 2

const isPalindrome = (string) => {
  const newString = string.replaceAll(' ','').toLowerCase();
  let reversString = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    reversString += newString.at(i);
  }
  return newString === reversString;
};

isPalindrome ('Лёша на полке клопа нашёл ');

// дополнительное задание

const getNumber = (string) => {
  const newString = string.toString().replaceAll(' ','');
  let totalNumber = '';
  for (let i = 0; i < newString.length; i++) {
    if (!isNaN(parseInt(newString[i]))) {
      totalNumber += newString[i];
    }
  }
  return parseInt(totalNumber);
};

getNumber('29 uy898 %%023 989');


