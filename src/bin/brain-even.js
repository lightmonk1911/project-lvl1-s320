#!/usr/bin/env node
import { askName, hello } from '..';
import game from '../games/brain-even';

hello();
console.log('Answer "yes" if number even otherwise answer "no".');
const playerName = askName();
game(playerName);
