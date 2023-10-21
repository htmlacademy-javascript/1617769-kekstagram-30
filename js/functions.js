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


// Задание 5.2
/*const isMeetingBeyondWorkday = (sw, ew, sm, md) => {
  const startW = sw.split(':');
  const endW = ew.split(':');
  const startM = sm.split(':');

  const swInMin = +startW[0] * 60 + +startW[1];
  const ewInMin = +endW[0] * 60 + +endW[1];
  const smInMin = +startM[0] * 60 + +startM[1];
  const emInMin = smInMin + md;

  if(smInMin >= swInMin && emInMin <= ewInMin) {
    return true;
  }
  return false;
};

window.console.log(isMeetingBeyondWorkday('8:00', '17:30', '08:00', 900)); */


const isMeetingBeyond = (sw, ew, sm, md) => {
  const withoutColon = [sw, ew, sm].map((value) => value.split(':'));
  const inMin = withoutColon.map((value) => +value[0] * 60 + +value[1]);
  const emInMin = inMin[2] + md;
  return (inMin[2] >= inMin[0] && emInMin <= inMin[1]);
};
window.console.log(isMeetingBeyond('8:00', '17:30', '08:00', 900));
