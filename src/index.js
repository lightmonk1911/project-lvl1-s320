import readlineSync from 'readline-sync';

const hello = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  return playerName;
};

export { hello, askName };
