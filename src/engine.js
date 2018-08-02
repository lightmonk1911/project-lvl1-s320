import readlineSync from 'readline-sync';
import { askName, hello } from '.';

export default (rules, getQestionAndAnswer) => {
  const numOfRounds = 3;

  hello();
  console.log(rules);
  const playerName = askName();

  for (let i = 0; i < numOfRounds; i += 1) {
    const [question, correctAnswer] = getQestionAndAnswer();
    const answer = readlineSync.question(`Question: ${question}\n`);
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};
