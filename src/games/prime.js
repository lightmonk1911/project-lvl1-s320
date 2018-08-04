import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Is this number prime? Say "yes" or "no"';
const isPrime = (number) => {
  if (number < 2) return false;
  const limit = number ** 0.5;
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = generateNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number.toString(), correctAnswer];
};

export default () => answerGame(description, getQuestionAndAnswer);
