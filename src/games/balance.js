import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Balance the given number.';
const balance = (arrayOfDigits) => {
  const sum = arrayOfDigits.reduce((acc, digit) => digit + acc, 0);
  const average = sum / arrayOfDigits.length;
  const small = Math.floor(average);
  const big = small + 1;
  const countOfBig = sum - (arrayOfDigits.length * small);
  const countOfSmall = arrayOfDigits.length - countOfBig;
  const newArray = [];
  for (let i = 0; i < arrayOfDigits.length; i += 1) {
    newArray.push(i < countOfSmall ? small : big);
  }
  return newArray;
};

const getQuestionAndAnswer = () => {
  const number = generateNumber(0, 1000);
  const arrayOfDigits = Array.from(number.toString()).map(digit => Number(digit));
  const balancedArray = balance(arrayOfDigits);
  return [arrayOfDigits.join(''), balancedArray.join('')];
};

export default () => answerGame(description, getQuestionAndAnswer);
