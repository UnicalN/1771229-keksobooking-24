const bodyElement = document.querySelector('body');
const adFormElement=document.querySelector('.ad-form');
const mapFiltersElement=document.querySelector('.map__filters');
let submitMessageElement;


const escOnSubmitMessageHandler = (evt) =>{
  if (evt.key === 27) {
    bodyElement.remove(submitMessageElement);
  }
};

const clickOnSubmitMessageHandler = () =>{
  bodyElement.remove(submitMessageElement);
};

const buttonOnSubmitMessageHandler = () =>{
  bodyElement.remove(submitMessageElement);
};


//popupcreators
const  createSuccessPopup = () =>{
  submitMessageElement = (document.querySelector('#success')).content.cloneNode(true);
  bodyElement.appendChild(submitMessageElement);
  adFormElement.reset();
  mapFiltersElement.reset();

  window.addEventListener('keydown', (evt) => escOnSubmitMessageHandler(evt));
  submitMessageElement.addEventListener('click', clickOnSubmitMessageHandler());
};

const  createErrorPopup = () =>{
  submitMessageElement = (document.querySelector('#error')).content.cloneNode(true);
  bodyElement.appendChild(submitMessageElement);
  window.addEventListener('keydown', (evt) => escOnSubmitMessageHandler(evt));
  submitMessageElement.addEventListener('click', clickOnSubmitMessageHandler());
  const closeButton = submitMessageElement.querySelector('.error__button');
  closeButton.addEventListener('click', buttonOnSubmitMessageHandler());

};


export { createSuccessPopup,  createErrorPopup};
