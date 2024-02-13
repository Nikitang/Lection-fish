#!/usr/bin/env node
import { addNewFishing, getFishName, renameFish } from "../functions.js"
import readlineSync from 'readline-sync';
const object = { fishing: [] };
function myFishing() {
    console.log('Welcome to MyFishing');
    console.log('Give me all settings');
    const number = readlineSync.question('Number fishing: ');
    const date = readlineSync.question('Say me date: ');
    const loc = readlineSync.question('Location fishing: ');
    const weat = readlineSync.question('Weather on fishing: ');
    const ves = readlineSync.question('Fish weight: ');
    const name = readlineSync.question('Fish name: ');
    addNewFishing(object, number, date, loc, weat, ves, name);
    console.log(`This is you new list: `);
    console.log(object);
    return object;
};

myFishing();
myFishing();


