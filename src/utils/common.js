export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

export const shuffleArray = ([...array]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = getRandomIntegerNumber(0, currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
