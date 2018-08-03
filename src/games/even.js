import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = generateNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, correctAnswer];
};

export default () => answerGame(description, getQuestionAndAnswer);
