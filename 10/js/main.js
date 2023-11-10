import './util.js';
import './data.js';
import './thumbnail.js';
import './form.js';
import './gallery.js';

import {getPhotoDescriptions} from './data.js';
import { renderGallery } from './gallery.js';
renderGallery(getPhotoDescriptions());
window.console.log(getPhotoDescriptions());
