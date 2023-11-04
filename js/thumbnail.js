const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createThumbnail = ({ id, url, description, comments, likes}) => {
  const thumbnail = pictureTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.setAttribute('id', id);
  return thumbnail;
};

const renderThumbnails = (pictures, container) => {
  container = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export{renderThumbnails};
