import readlineSync from 'readline-sync';
import { askName, hello } from '..';

export default (rules, questionPair) => {
  const numOfRounds = 3;

  hello();
  console.log(rules);
  const playerName = askName();

  const round = ([question, correctAnswer]) => {
    const answer = readlineSync.question(`Question: ${question}\n`);
    if (answer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${playerName}!`);
    return false;
  };

  for (let i = 0; i < numOfRounds; i += 1) {
    if (!round(questionPair)) return;
  }

  console.log(`Congratulations, ${playerName}!`);
};
