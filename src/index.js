import readlineSync from 'readline-sync';

const hello = console.log('Welcome to the Brain Games!\n');

const askName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export { hello, askName };
