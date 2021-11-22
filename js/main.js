import {validateOffer, setUserFormSubmit} from './modules/interaction-with-form.js';
import {getData} from './modules/server-interfaces.js';
import { resetMap, map} from './modules/map.js';
import {enablePage, disablePage} from './modules/enable-disable-page.js';
disablePage();


map.whenReady(() => {
  enablePage();
  validateOffer();
  getData();
  resetMap();
  setUserFormSubmit();
});
