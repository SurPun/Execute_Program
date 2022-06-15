// Day 3 ------------------- Modern JavaScript: Basic array destructuring -------------------
/* 

>
const letters = ['a', 'b', 'c', 'd'];
const a = letters[0], b = letters[1], c = letters[2];
[a, b, c];
RESULT:
['a', 'b', 'c']

>
const letters = ['a', 'b', 'c', 'd'];
const [a, b, c] = letters;
[a, b, c];
RESULT:
['a', 'b', 'c']

const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];
const firstUser = names[0];
const secondUser = names[1];
​
const users = [firstUser, secondUser];
users;
GOAL:
['Amir', 'Betty']
YOURS:
['Amir', 'Betty']

>
const letters = ['a', 'b', 'c', 'd'];
let [a, b, c] = letters;
[a, b, c];
RESULT:
['a', 'b', 'c']

>
const letters = ['a', 'b', 'c', 'd'];
var [a, b, c] = letters;
[a, b, c];
RESULT:
['a', 'b', 'c']

>
const letters = ['a', 'b', 'c', 'd'];
const [a, , c] = letters;
[a, c];
RESULT:
['a', 'c']

>
const [a, b, c] = null;
RESULT:
TypeError: null is not iterable

>
const [a, b, c] = 5;
RESULT:
TypeError: 5 is not iterable

>
const letters = ['a', 'b', 'c'];
const [a, b, c, d] = letters;
[c, d];
RESULT:
['c', undefined]

>
const letters = ['a', 'b', 'c'];
const [a, b, c, d='dee'] = letters;
[c, d];
RESULT:
['c', 'dee']

>
const letters = ['a', 'b', 'c', 'd'];
const [a, b, c, d='dee'] = letters;
[c, d];
RESULT:
['c', 'd']

>
const letters = ['a', 'b', 'c'];
const [a, b, c, d='dee', e] = letters;
[d, e];
RESULT:
['dee', undefined]

>
const letters = ['a', 'b', 'c'];
const [a, ...others] = letters;
others;
RESULT:
['b', 'c']

>
const letters = ['a', 'b', 'c'];
const [a, b, ...others] = letters;
others;
RESULT:
['c']

const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];
...
const firstUser = names[0];
const secondUser = names[1];
const [a, b, ...otherUsers] = names;
​
const users = [firstUser, secondUser, otherUsers];
users;
GOAL:
['Amir', 'Betty', ['Cindy', 'Dalili']]
YOURS:
['Amir', 'Betty', ['Cindy', 'Dalili']]

>
const letters = ['a', 'b', 'c']
const [...others, a] = letters
others
RESULT:
SyntaxError: on line 2: Rest element must be last element.

>
const letters = 'abc';
const [a, b, c] = letters;
b;
RESULT:
'b'

>
const s = 'this is a long string';
const [...chars] = s;
chars[2];
RESULT:
'i'

/* 

/* 

// Day 2 -------------------------

...

// Day 1 -------------------------

...

*/
