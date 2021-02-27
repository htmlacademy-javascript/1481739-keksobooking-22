import {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getUniqueArray} from './util.js';

const TOTAL_COUNT = 10;

const MIN_AVATAR_COUNT = 1;

const MAX_AVATAR_COUNT = 8;

const MIN_PRICE = 1000;

const MAX_PRICE = 100000;

const MIN_ROOMS = 1;

const MAX_ROOMS = 10;

const MIN_GUESTS = 1;

const MAX_GUESTS = 30;

const X_MIN_LOCATION = 35.65000;

const X_MAX_LOCATION = 35.70000;

const Y_MIN_LOCATION = 139.70000;

const Y_MAX_LOCATION = 139.80000;

const OFFER_TITLES = [
  'Лучшее, что ты видел',
  'Выгодное предложение',
  'Нормальный вариант',
  'Закрой глаза и жми сюда',
  'Не для слабонервных',
];

const OFFER_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const OFFER_CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking', 'washer',
  'elevator',
  'conditioner',
];

const OFFER_DESKRIPTIONS = [
  'Идеальное место',
  'Ой, хорошо',
  'Норм',
  'Ну,если не придираться, пойдет',
  'Все плохо',
  'За чтооо',
];

const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const houseTypes = Object.keys(OFFER_TYPES);

const getLocation = () => {
  const x = getRandomFloatInclusive(X_MIN_LOCATION, X_MAX_LOCATION, 5);
  const y = getRandomFloatInclusive(Y_MIN_LOCATION, Y_MAX_LOCATION, 5);

  return [x, y]
};

const getAuthor = () => {
  return  {avatar: `img/avatars/user' 0${getRandomIntInclusive(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}.png`};
};

const getTotalObject = () => {
  return {
    author: getAuthor(),
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: getLocation(),
      price: getRandomIntInclusive(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(houseTypes),
      rooms: getRandomIntInclusive(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomIntInclusive(MIN_GUESTS , MAX_GUESTS ),
      checkin: getRandomArrayElement(OFFER_CHECKIN_TIMES),
      checkout: getRandomArrayElement(OFFER_CHECKOUT_TIMES),
      description: getRandomArrayElement(OFFER_DESKRIPTIONS),
      features: getUniqueArray(OFFER_FEATURES),
      photos: getUniqueArray(OFFER_PHOTOS),
    },
    location: getLocation(),
  }
}

const createSimilarOffers = (count = TOTAL_COUNT) => {
  return new Array(count).fill(null).map(() => getTotalObject());
}

export {createSimilarOffers, OFFER_TYPES};