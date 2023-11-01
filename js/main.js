import './util.js';
import './data.js';
import './thumbnail.js';
import {getPhotoDescriptions} from './data.js';
import {renderThumbnails} from './thumbnail.js';

renderThumbnails(getPhotoDescriptions());
window.console.log(getPhotoDescriptions());

