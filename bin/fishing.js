#!/usr/bin/env node
import { addNewFishing, renameFish, getFishName } from "../functions.js"
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

function reName() {
    const rename = readlineSync.question('You want rename fish?(yes/no): ');
    if (rename === 'yes') {
        const read = readlineSync.question('Read number fishing: ');
        const read2 = readlineSync.question('New name fish: ');
        renameFish(object, read, read2);
    }
    const want = readlineSync.question('You want check list?(yes/no) ');
    if (want === 'yes') {
        console.log(object);
    }
    return;
};

reName();

