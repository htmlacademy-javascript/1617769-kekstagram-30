import {getPhotoDescriptions} from './data.js';

const pictures = document.querySelector('.pictures'); // туда будут добавляться фото других польз
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон для карточек других польз
// const pictureTitle = document.querySelector('.pictures__title').classList.remove('visually-hidden');
window.console.log(pictures);

const picture = pictureTemplate.cloneNode(true);
pictures.appendChild(picture);

const similarPictures = getPhotoDescriptions();

const similarListFragment = document.createDocumentFragment();

window.console.log(similarPictures);
similarPictures.forEach((pic) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = pic.url;
  pictureElement.querySelector('.picture__img').alt = pic.description;
  pictureElement.querySelector('.picture__likes').textContent = pic.likes;
  pictureElement.querySelector('.picture__comments').textContent = pic.comments;
  similarListFragment.appendChild(pictureElement);
});

pictures.appendChild(similarListFragment);
