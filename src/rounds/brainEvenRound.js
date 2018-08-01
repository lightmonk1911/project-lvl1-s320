import readlineSync from 'readline-sync';

export default (success, fail) => {
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${num}\n`);
  if (answer === correctAnswer) {
    success(answer, correctAnswer);
    return true;
  }
  fail(answer, correctAnswer);
  return false;
};
