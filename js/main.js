import './util.js';
import './thumbnail.js';
import './form.js';
import './gallery.js';
import { renderGallery } from './gallery.js';
import { loadPictures } from './api.js';
import { showErrorMessage } from './util.js';

async function bootstrap() {
  try {
    const pictures = await loadPictures();
    renderGallery(pictures);
  } catch {
    showErrorMessage();
  }
}

bootstrap();
