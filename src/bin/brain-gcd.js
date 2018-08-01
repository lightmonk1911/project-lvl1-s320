#!/usr/bin/env node
import { askName, hello } from '..';
import game from '../games/threeRoundAnswerGame';
import round from '../rounds/brainGcdRound';

hello();
console.log('Find the greatest common divisor of given numbers.');
const playerName = askName();
game(playerName, round);
