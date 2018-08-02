import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Balance the given number.';

const getQestionAndAnswer = () => {
  const number = generateNumber(0, 1000);
  const arrayOfDigits = Array.from(number.toString()).map(digit => Number(digit));
  const sum = arrayOfDigits.reduce((acc, digit) => digit + acc, 0);
  const average = sum / arrayOfDigits.length;
  const small = Math.floor(average);
  const big = small + 1;
  const countOfBig = sum % average;
  const countOfSmall = (sum - countOfBig) / average;
  const newArray = [];
  for (let i = 0; i < arrayOfDigits.length; i += 1) {
    newArray.push(i < countOfSmall ? small : big);
  }
  return [arrayOfDigits.join(''), newArray.join('')];
};

export default () => answerGame(description, getQestionAndAnswer);
