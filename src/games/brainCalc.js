import answerGame from '../gameEngines/AnswerGame';
import { random } from '..';

const rules = 'What is the result of the expression?';

const questionPair = () => {
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
  answerGame(rules, questionPair);
};
