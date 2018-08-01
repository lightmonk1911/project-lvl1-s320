import readlineSync from 'readline-sync';

export default (success, fail) => {
  const random = (min = 0, max = 100) => Math.floor(Math.random() * max - min + 1);
  const arithmetic = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
  ];
  const a = random();
  const b = random();
  const operation = arithmetic[random(0, 2)];
  const [sign, func] = operation;
  const expression = `${a} ${sign} ${b}`;
  const correctAnswer = func(a, b).toString();
  const answer = readlineSync.question(`Question: ${expression}\n`);
  if (answer === correctAnswer) {
    success(answer, correctAnswer);
    return true;
  }
  fail(answer, correctAnswer);
  return false;
};
