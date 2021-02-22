const checkRangeValidity = (min,max) => {
  if (min < 0 || max < 0 || max <= min) {
    return false;
  }

  return true;
}

const getRandomIntInclusive = (min, max) => {
  if (checkRangeValidity(min, max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return -1;
}

const getRandomFloatInclusive = (min, max, fix = 2) => {
  if (checkRangeValidity(min, max)) {
    const randomNumber =  Math.random() * (max - min) + min;

    return randomNumber.toFixed(fix);
  }

  return -1;
}

const getRandomArrayElement = (elements) => {
  const indexElement = getRandomIntInclusive(0, elements.length - 1);
  return elements[indexElement];
};

const getUniqueArray = (array) => {
  const uniqueArray = [];

  for (let i=0; i <= array.length-1; i++) {
    const randomElement = getRandomArrayElement(array);

    if (!uniqueArray.includes(randomElement)) {
      uniqueArray.push(randomElement);
    }
  }

  return uniqueArray;
};

const appendContent = (element, content, appendType = 'textContent') => {
  if (!content) {
    return element.remove();
  }

  switch (appendType) {
    case 'textContent':
      element.textContent = content;
      break;
    case 'innerHTML':
      element.innerHTML = '';
      element.innerHTML = content;
      break;
    case 'src':
      element.src = content;
      break;
    default:
      throw new Error(`Unexpected appendType: ${appendType}`);
  }
};

export {
  getRandomIntInclusive,
  getRandomFloatInclusive,
  getRandomArrayElement,
  getUniqueArray,
  appendContent
};