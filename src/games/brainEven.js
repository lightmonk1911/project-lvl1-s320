import answerGame from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const getQestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, correctAnswer];
};

export default () => {
  answerGame(description, getQestionAndAnswer);
};
