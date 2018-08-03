import readlineSync from 'readline-sync';

const hello = () => console.log('Welcome to the Brain Games!');
const askName = () => {
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};
const numOfRounds = 3;

export default (description, getQestionAndAnswer) => {
  hello();
  console.log(description);
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
