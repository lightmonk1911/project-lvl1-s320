import readlineSync from 'readline-sync';

export default (playerName) => {
  let score = 0;

  const round = () => {
    const num = Math.floor(Math.random() * 100);
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num}\n`);
    if (answer === correctAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${playerName}!`);
    return false;
  };

  while (score < 3) {
    if (!round()) {
      return;
    }
    score += 1;
  }
  console.log(`Congratulations, ${playerName}`);
};
