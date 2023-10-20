import {createIdGenerator, createIdGeneratorTill25, getRandomInteger, getRandomArrayElement} from './util.js';

const COMMENTS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. ',
  'Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Вася', 'Оля', 'Коля', 'Маша', 'Игорь', 'Настя', 'Дима', 'Петя', 'Аня'];
const DESCRIPTION = ['Редкое фото', 'Опратите внимение на задний фон', 'Это работа великого мастера', 'Школьная работа', 'Из семейного архива', 'На природе с другом', 'Настя фотала'];
const PHOTO_DESCRIPTION_COUNT = 25;

const generateCommentId = createIdGenerator();
const generateUrlNumber = createIdGeneratorTill25();
const generatePhotoId = createIdGeneratorTill25();
// получение случайного элемента из указанного массива
const createComment = () => ({
  id: generateCommentId(),//любое число. Идентификаторы не должны повторяться
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),//массив[случайное число],
  name: getRandomArrayElement(NAMES),
});

const getCommentsUderPhoto = () => {
  const numberOfComments = getRandomInteger(0, 30);
  const comments = Array.from({length: numberOfComments}, createComment);
  return comments;
};

const createPhotoDescription = () => ({
  id: generatePhotoId(),//число от 1 до 25. Не должны повторяться
  url: `photos/${generateUrlNumber()}.jpg`,// {{i}} - число от 1 до 25. Адреса картинок не должны повторяться
  description: getRandomArrayElement(DESCRIPTION), //строка. Придумать самостоятельно
  likes: getRandomInteger(15, 200),// случайное число от 15 до 200
  comments: getCommentsUderPhoto(),/* массив объектов — список комментариев, оставленных
  другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом*/
});
// eslint-disable-next-line no-unused-vars
const photoDescriptions = Array.from({length: PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);
