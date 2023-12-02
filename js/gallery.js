import { renderThumbnails } from './thumbnail.js';
import { showPicture} from './picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (picture) => {
  renderThumbnails(picture, container);
};

const initGalleryListeners = (picture) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('a.picture[id]');

    if (! thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = +evt.target.parentNode.id;
    const pictureData = picture.find(({ id }) => id === thumbnailId);
    showPicture(pictureData);
  });
};

export { renderGallery, initGalleryListeners };
