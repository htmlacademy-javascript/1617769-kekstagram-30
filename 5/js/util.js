const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Генератор уникальных чисел по порядку.
function createIdGenerator () {
  let lastGeneratedId = 1;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

function createIdGeneratorTill25 () {
  let lastGeneratedId = 1;

  return function () {
    lastGeneratedId++;
    if (lastGeneratedId > 25) {
      lastGeneratedId = 1;
    }
    return lastGeneratedId;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, createIdGenerator, createIdGeneratorTill25, getRandomArrayElement};
