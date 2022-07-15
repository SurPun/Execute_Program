//---------//
/// Day 2 /// -----------------------------------------
//---------//



//---------//
/// Day 1 /// -----------------------------------------
//---------//

/*

const name = 'Betty';
const email = `
  Hi, ${name},
  
  We've been acquired and are shutting down!
`;
email === "\n  Hi, Betty,\n  \n  We've been acquired and are shutting down!\n";
RESULT:
true

function getUserName() {
    let user = {name: 'Amir'};
    if (true) {
      let user = {name: 'Betty'};
    }
    return user.name;
  }
  getUserName();
  RESULT:
  'Amir'

const aNumber = 55
delete aNumber
RESULT:
SyntaxError: on line 2: Deleting local variable in strict mode.


function addMany(...numbers, toAdd) {
    const result = [];
    for (const n of numbers) {
      result.push(n + toAdd);
    }
    return result;
  }
  addMany(1, 7.7, 1000, 2);
  RESULT:
  SyntaxError: on line 1: Rest element must be last element.

  function f() {
    const x = 1;
    x = 2;
    return x;
  }
  f();
  RESULT:
  TypeError: Assignment to constant variable.

  function longSum(x, y) {
    return `${x} + ${y} = ${x + y}`
  }
  [longSum(1, 2), longSum(10, 20)];
  GOAL:
  ['1 + 2 = 3', '10 + 20 = 30']
  YOURS:
  ['1 + 2 = 3', '10 + 20 = 30']

  function getUserName() {
    const user = {name: 'Amir'};
    {
      const user = {name: 'Betty'};
    }
    return user.name;
  }
  getUserName();
  RESULT:
  'Amir'

const names = ['Amir', 'Betty'];
const [name1, name2, name3] = names;
[name2, name3];
RESULT:
['Betty', undefined]

function f() {
    if (true) {
      let x = 1;
    }
    return x;
  }
  f();
  RESULT:
  ReferenceError: x is not defined

`1 + 1 = ${1 + 1}`;
RESULT:
'1 + 1 = 2'

function defineX() {
    x = 1;
    return 'ok';
  }
  defineX();
  RESULT:
  ReferenceError: x is not defined

const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];
const [, x, y] = names;
[x, y];
RESULT:
['Betty', 'Cindy']

const s = 'loop';
const chars = [];
for (const char of s) {
  chars.push(char);
}
chars;
RESULT:
['l', 'o', 'o', 'p']

function add(x, y) {
    return x + y;
  }
  const numbers = [1, 2];
  add(...numbers);
  RESULT:
  3

const numbers = [];
numbers[2] = 'some value';
const result = [];
for (const n of numbers) {
  result.push(n);
}
result;
RESULT:
[undefined, undefined, 'some value']

*/