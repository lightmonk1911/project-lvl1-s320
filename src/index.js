import readlineSync from 'readline-sync';
const askName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
}
export { askName };
