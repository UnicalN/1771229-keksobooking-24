const TypeMap = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const cardElement = document.querySelector('#card').content;

const removeEmptyElements = (removeFrom) => {
  for (const element in removeFrom){
    if (element==='')
    {removeFrom[element].classList.add('hidden');}
  }
};

const createOfferLayout = (offerSummary) => {
  const cardCloneElement = cardElement.cloneNode(true);
  const popup = {
    title: cardCloneElement.querySelector('.popup__title'),
    address: cardCloneElement.querySelector('.popup__text--address'),
    price: cardCloneElement.querySelector('.popup__text--price'),
    type: cardCloneElement.querySelector('.popup__type'),
    capacity: cardCloneElement.querySelector('.popup__text--capacity'),
    time: cardCloneElement.querySelector('.popup__text--time'),
    features: cardCloneElement.querySelector('.popup__features'),
    description: cardCloneElement.querySelector('.popup__description'),
    photos: cardCloneElement.querySelector('.popup__photos'),
    avatar: cardCloneElement.querySelector('.popup__avatar'),
  };
  const addFeatures = (featuresToAdd) =>{
    popup.features.innerHTML = '';
    if (!(featuresToAdd===undefined)) {
      for (const feature of featuresToAdd) {
        popup.features.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${feature}"></li>`);
      }
    }
  };
  const addPhotos = (photosToAdd) => {
    popup.photos.innerHTML='';
    if (!(photosToAdd===undefined)) {
      for (const photo of photosToAdd){
        const photoTemplateClone = popup.photoTemplate.cloneNode(true);
        photoTemplateClone.src=photo;
        popup.photos.appendChild(photoTemplateClone);
      }
    }
  };
  popup.title.textContent = offerSummary.offer.title;
  popup.address.textContent = offerSummary.offer.address;
  popup.price.textContent = (`${offerSummary.offer.price  } ₽/ночь`);
  popup.type.textContent = TypeMap[offerSummary.offer.type];
  popup.capacity.textContent = (`${offerSummary.offer.rooms} комнаты для ${offerSummary.offer.guests} гостей`);
  popup.time.textContent = (`Заезд после ${offerSummary.offer.checkin}, выезд до ${offerSummary.offer.checkout}`);
  addFeatures(offerSummary.offer.features);
  popup.description.textContent = offerSummary.offer.description;
  popup.photoTemplate = popup.photos.querySelector('.popup__photo');
  addPhotos(offerSummary.offer.photos);
  popup.avatar.src=offerSummary.author.avatar;
  removeEmptyElements(cardCloneElement);
  return cardCloneElement.firstChild;
};


export {
  createOfferLayout
};
