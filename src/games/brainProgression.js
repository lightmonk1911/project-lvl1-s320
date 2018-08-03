import answerGame from '../engine';
import generateNumber from '../utils';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const getQestionAndAnswer = () => {
  const startNumber = generateNumber();
  const step = generateNumber();
  const progression = [];
  let currentNumber;
  for (let i = 0; i < progressionLength; i += 1) {
    currentNumber = startNumber + (i * step);
    progression.push(currentNumber);
  }
  const indexOfMissing = generateNumber(0, progressionLength - 1);
  const answer = progression[indexOfMissing].toString();
  progression[indexOfMissing] = '..';
  return [progression.join(' '), answer];
};

export default () => {
  answerGame(description, getQestionAndAnswer);
};
