import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Is this number prime? Say "yes" or "no"';
const isPrime = (number) => {
  let i = 2;
  while (i < number / i) {
    if (number % i === 0) return false;
    i += 1;
  }
  return true;
};

const getQestionAndAnswer = () => {
  const number = generateNumber();
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number.toString(), answer];
};

export default () => {
  answerGame(description, getQestionAndAnswer);
};
