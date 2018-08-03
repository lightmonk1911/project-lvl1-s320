import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'What is the result of the expression?';
const arithmetic = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const getQestionAndAnswer = () => {
  const a = generateNumber();
  const b = generateNumber();
  const operation = arithmetic[generateNumber(0, 2)];
  const [sign, func] = operation;
  const question = `${a} ${sign} ${b}`;
  const correctAnswer = func(a, b).toString();
  return [question, correctAnswer];
};

export default () => {
  answerGame(description, getQestionAndAnswer);
};
