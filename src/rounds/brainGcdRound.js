import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  const isCommonDivisor = (div, x = a, y = b) => x % div === 0 && y % div === 0;
  const [min] = [a, b].sort();
  let i = 1;
  while ((min % i !== 0) || !isCommonDivisor(min / i)) {
    i += 1;
  }
  return min / i;
};

export default (success, fail) => {
  const random = (min = 0, max = 100) => Math.floor(Math.random() * max - min + 1);
  const a = random();
  const b = random();

  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b).toString();
  const answer = readlineSync.question(`Question: ${question}\n`);
  if (answer === correctAnswer) {
    success(answer, correctAnswer);
    return true;
  }
  fail(answer, correctAnswer);
  return false;
};
