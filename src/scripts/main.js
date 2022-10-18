import 'focus-visible';
import onDocumentReady from './helpers/onDocumentReady';
import lazyImages from './modules/lazyimages';
import addMoreButton from './modules/addMoreButton';

onDocumentReady(() => {
  lazyImages();
  addMoreButton();
});
