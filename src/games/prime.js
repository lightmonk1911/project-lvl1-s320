import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Is this number prime? Say "yes" or "no"';
const isPrime = (number) => {
  if (number < 2) return false;
  let i = 2;
  while (i <= number / i) {
    if (number % i === 0) return false;
    i += 1;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = generateNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number.toString(), correctAnswer];
};

export default () => answerGame(description, getQuestionAndAnswer);
