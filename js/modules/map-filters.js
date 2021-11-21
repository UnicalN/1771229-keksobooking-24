import { getData } from './server-interfaces.js';

const LOW_PRICE_FILTER = 10000;
const HIGH_PRICE_FILTER = 50000;


const filtersElement = document.querySelector('.map__filters');
const typeFilterElement = filtersElement.querySelector('#housing-type');
const priceFilterElement = filtersElement.querySelector('#housing-price');
const roomsFilterElement =filtersElement.querySelector('#housing-rooms');
const guestsFilterElement = filtersElement.querySelector('#housing-guests');
const featuresElement =
{
  wifi : (filtersElement.querySelector('#filter-wifi')),
  dishwasher : (filtersElement.querySelector('#filter-dishwasher')),
  parking : (filtersElement.querySelector('#filter-parking')),
  washer : (filtersElement.querySelector('#filter-washer')),
  elevator : (filtersElement.querySelector('#filter-elevator')),
  conditioner : (filtersElement.querySelector('#filter-conditioner')),
};

const isRoomsSuitable = (offerSummary) =>    (roomsFilterElement.value ==='any') ||(`${offerSummary.offer.rooms}`===roomsFilterElement.value);
const isTypeSuitable = (offerSummary) =>     (typeFilterElement.value ==='any')  ||(offerSummary.offer.type === typeFilterElement.value);
const isCapacitySuitable = (offerSummary) => (guestsFilterElement.value ==='any')||(`${offerSummary.offer.guests  }` === guestsFilterElement.value);
const isPriceSuitable = (offerSummary) =>
  (priceFilterElement.value  ==='any')||
(priceFilterElement.value === 'low' && offerSummary.offer.price <=LOW_PRICE_FILTER) ||
(priceFilterElement.value === 'high' && offerSummary.offer.price >=HIGH_PRICE_FILTER)||
(priceFilterElement.value === 'middle' && (offerSummary.offer.price >=LOW_PRICE_FILTER) && (offerSummary.offer.price <= HIGH_PRICE_FILTER));
//новая фильтрация, cFFL работает нормально
const createFilterFeaturesList = () =>
{
  const featuresList = [];
  for (const key in featuresElement) {
    if (featuresElement[key].checked === true){
      featuresList.push(key);
    }
  }
  return featuresList;
};

const areFeaturesSuitable = (offerFeatures) =>
{
  const filterFeatures = createFilterFeaturesList();
  //console.log(offerFeatures)
  if (filterFeatures===''){
    return true;
  }
  if (offerFeatures === undefined){
    return false;
  }
  for (const filterFeature of filterFeatures){
    if (offerFeatures.indexOf(filterFeature)===-1){
      return false;
    }
  }
  return true;
};


const isOfferSuitable = (offerSummary) =>(( isRoomsSuitable(offerSummary))&&
(isTypeSuitable(offerSummary))&&
(isCapacitySuitable(offerSummary))&&
(isPriceSuitable(offerSummary))
&&(areFeaturesSuitable(offerSummary.offer.features))
);
filtersElement.addEventListener('input', () => getData());

export {
  isOfferSuitable
};
