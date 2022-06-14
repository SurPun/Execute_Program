"use strict";

/* (Day 2) Modern JavaScript: Accessors in object literals

>
const user = {
  userName: 'Amir'
};
user.userName;
RESULT:
'Amir'

>
const user = {
  get userName() { return 'Amir'; }
};
user.userName;
RESULT:
'Amir'

>
const user = {
  get userName() { return 'Be' + 'tty'; }
};
user.userName;
RESULT:
'Betty'

let userName = 'Amir';
const user = {
  get userName() { return userName; }
};
const name1 = user.userName;
userName = 'Betty';
const name2 = user.userName;
[name1, name2];
GOAL:
['Amir', 'Betty']
YOURS:
['Amir', 'Betty']

>
const user = {userName: 'Amir'};
user.userName = 'Betty';
user.userName;
RESULT:
'Betty'

>
const user = {
  realName: 'Amir',
  set userName(newName) { this.realName = newName; }
};
user.userName = 'Betty';
user.realName;
RESULT:
'Betty'

>
const user = {
  realName: 'Amir',
  set userName(newName) { this.realName = newName; }
};
user.userName;
RESULT:
undefined

>
const user = {
  realName: 'Amir',
  get userName() { return this.realName; },
  set userName(newName) { this.realName = newName; },
};
user.userName = 'Betty';
[user.realName, user.userName];
RESULT:
['Betty', 'Betty']

const user = {
  names: ['Amir'],
  set userName(newName) {
    this.names.push(newName);
  }
};
user.userName = 'Betty';
user.names;
GOAL:
['Amir', 'Betty']
YOURS:
['Amir', 'Betty']

>
function createUser(userName) {
  return {
    names: [userName],
    get userName() { return this.names[this.names.length - 1]; },
    set userName(userName) { this.names.push(userName); }
  };
}

const user = createUser('Amir');
user.userName = 'Betty';
user.names;
RESULT:
['Amir', 'Betty']

>
const user = {
  userName: function () { return 'Amir'; }
};
typeof user.userName;
RESULT:
'function'

*/

/* (DAY 1)
--- Modern JavaScript: Accessors in object literals ---

>
const user = {
  userName: 'Amir'
};
user.userName;
RESULT:
'Amir'

// ----------------- 1. ----------------- //

  >
const user = {
  get userName() { return 'Amir'; }
};
user.userName;
RESULT:
'Amir'

// ----------------- 2. ----------------- //

>
const user = {
  get userName() { return 'Be' + 'tty'; }
};
user.userName;
RESULT:
'Betty'

// ----------------- 3. ----------------- //

let userName = 'Amir';
const user = {
  get userName() {
    return userName;
  }
  
}
const name1 = user.userName;
userName = 'Betty';
const name2 = user.userName;
[name1, name2];
GOAL:
['Amir', 'Betty']
YOURS:
['Amir', 'Betty']


// ----------------- 4. ----------------- //

>
const user = {userName: 'Amir'};
user.userName = 'Betty';
user.userName;
RESULT:
'Betty'

// ----------------- 5. ----------------- //

>
const user = {
  realName: 'Amir',
  set userName(newName) { this.realName = newName; }
};
user.userName = 'Betty';
user.realName;
RESULT:
'Betty'

// ----------------- 6. ----------------- //

>
const user = {
  realName: 'Amir',
  set userName(newName) { this.realName = newName; }
};
user.userName;
RESULT:
undefined

// ----------------- 7. ----------------- //

>
const user = {
  realName: 'Amir',
  get userName() { return this.realName; },
  set userName(newName) { this.realName = newName; },
};
user.userName = 'Betty';
[user.realName, user.userName];
RESULT:
['Betty', 'Betty']

// ----------------- 8. ----------------- //

const user = {
  names: ['Amir'],
  set userName(a) { return user.names.push(a) }
}
  
user.userName = 'Betty';
user.names;
GOAL:
['Amir', 'Betty']
YOURS:
['Amir', 'Betty']

// ----------------- 9. ----------------- //

>
function createUser(userName) {
  return {
    names: [userName],
    get userName() { return this.names[this.names.length - 1]; },
    set userName(userName) { this.names.push(userName); }
  };
}

const user = createUser('Amir');
user.userName = 'Betty';
user.names;
RESULT:
['Amir', 'Betty']

// ----------------- 10. ----------------- //

>
const user = {
  userName: function () { return 'Amir'; }
};
typeof user.userName;
RESULT:
'function'

*/
