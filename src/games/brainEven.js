import answerGame from '../gameEngines/AnswerGame';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const questionPair = () => {
  const isEven = num => num % 2 === 0;
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, correctAnswer];
};

export default () => {
  answerGame(rules, questionPair);
};
