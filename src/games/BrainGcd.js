import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  const isCommonDivisor = (div, x = a, y = b) => x % div === 0 && y % div === 0;
  const [min] = [a, b].sort();
  let i = 1;
  while ((min % i !== 0) || !isCommonDivisor(min / i)) {
    i += 1;
  }
  return min / i;
};

const getQestionAndAnswer = () => {
  const a = generateNumber();
  const b = generateNumber();
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b).toString();
  return [question, correctAnswer];
};

export default () => {
  answerGame(description, getQestionAndAnswer);
};
