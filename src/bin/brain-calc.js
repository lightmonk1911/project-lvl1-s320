#!/usr/bin/env node
import { askName, hello } from '..';
import game from '../games/threeRoundAnswerGame';
import round from '../rounds/brainCalcRound';

hello();
console.log('What is the result of the expression?');
const playerName = askName();
game(playerName, round);
