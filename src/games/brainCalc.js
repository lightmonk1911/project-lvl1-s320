import answerGame from '../engine';
import random from '../utils';

const description = 'What is the result of the expression?';

const getQestionAndAnswer = () => {
  const arithmetic = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
  ];
  const a = random();
  const b = random();
  const operation = arithmetic[random(0, 2)];
  const [sign, func] = operation;
  const question = `${a} ${sign} ${b}`;
  const correctAnswer = func(a, b).toString();
  return [question, correctAnswer];
};

export default () => {
  answerGame(description, getQestionAndAnswer);
};
