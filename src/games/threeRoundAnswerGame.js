export default (playerName, round) => {
  const fail = (answer, correctAnswer) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let's try again, ${playerName}!`);
  };
  const success = () => {
    console.log('Correct!');
  };
  let score = 0;

  while (score < 3) {
    if (!round(success, fail)) {
      return;
    }
    score += 1;
  }
  console.log(`Congratulations, ${playerName}!`);
};
