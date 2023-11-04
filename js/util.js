const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createIdGenerator (count) {
  let lastGeneratedId = 0;
  return function () {
    lastGeneratedId += 1;
    if (count) {
      if (lastGeneratedId >= count) {
        lastGeneratedId = 1;
      }
    }
    return lastGeneratedId;
  };
}


const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, createIdGenerator, getRandomArrayElement, isEscapeKey};
