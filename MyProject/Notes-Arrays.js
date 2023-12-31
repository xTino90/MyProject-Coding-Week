"use strict";

/////////////////////////////////////////////////
// ⁡⁣⁣⁢Simple Array Methods⁡
let arr = ["a", "b", "c", "d", "e"];

// // ⁡⁢⁣⁣SLICE copia un array e non modifica l'array originale⁡
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // ⁡⁣⁣⁡⁢⁣⁣SPLICE modifica l'array originale⁡⁡
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr); //['a', 'b', 'c', 'd']
// arr.splice(1, 2);
// console.log(arr); //['a', 'd']

// // ⁡⁣⁣⁡⁢⁣⁣REVERSE⁡⁡
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// // ⁡⁢⁣⁣CONCAT⁡⁡
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // ⁡⁣⁣⁡⁢⁣⁣JOIN⁡⁡
// console.log(letters.join(" - "));

/*
///////////////////////////////////////
// ⁡⁣⁣⁢The new at Method⁡
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


///////////////////////////////////////
// ⁡⁣⁣⁢Looping Arrays: forEach⁡
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


///////////////////////////////////////
// ⁡⁣⁣⁢forEach With Maps and Sets⁡
// ⁡⁢⁣⁣Map⁡
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// ⁡⁢⁣⁣Set⁡
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

// ⁡⁣⁣⁢Coding ⁡⁡⁣⁣⁢CHALLENGE #1⁡
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age,
 and stored the data into an array (one array for each). For now, they are just interested in 
 knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
 and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied
 array (because it's a bad practice to mutate function parameters) 

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult
 ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/
/*
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
const julia1 = [9, 16, 6, 8, 3];
const kate1 = [10, 5, 6, 1, 4];
const checkDogs = function (dogsJulia, dogsKate) {
  //   console.log(dogsJulia.slice(1, -2));
  const correctJulia = dogsJulia.splice(1, 3);
  const correctKate = dogsKate.slice();
  console.log(correctJulia, correctKate);
  const arrConcat = correctJulia.concat(correctKate); //ricordati di concatenare gli array per risparmiare codice;
  console.log(arrConcat);
  arrConcat.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
  //   correctKate.forEach(function (dog, i) {
  //     if (dog > 3) {
  //       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
  //     } else {
  //       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  //     }
  //   });
};

checkDogs(julia, kate);
console.log("_______________________");
checkDogs(julia1, kate1);
*/
/*//////////////////////////////////////
// ⁡⁣⁣⁢The map Method⁡
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// Trasforming normal function in arrow function ⁡⁣⁣⁡⁣⁣⁢challenge on the lecture⁡/////////////⁡
// const movements = [5, 2, 4, 1, 15, 8, 3];
// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map((mov) => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);///////////////////////////////////////////////////////

///////////////////////////////////////
// ⁡⁣⁣⁢The filter Method⁡
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


///////////////////////////////////////
// ⁡⁣⁣⁢The reduce Method⁡
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// ⁡⁢⁣⁣challenge on the video
⁡
const moviments = [-100, -200, 2000, -350, 365, 400];
const withdrawals = moviments.filter(mov => mov > 0);

console.log(withdrawals);

// ⁡⁣⁣⁢Maximum value⁡
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/
// ⁡⁣⁣⁢Coding ⁡⁣⁣⁢CHALLENGE #2⁡

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human 
ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs
     that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other 
    challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// ⁡⁣⁣⁢Coding CHALLENGE #2 done.⁡
/*
const dogAge = [5, 2, 4, 1, 15, 8, 3];
const dogAge1 = [16, 6, 10, 5, 6, 1, 4];

const calcAvarageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  const adult = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adult);
  const avarage = adult.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return avarage;
};

const avg = calcAvarageHumanAge([...dogAge]);
const avg1 = calcAvarageHumanAge([...dogAge1]);
console.log(avg, avg1);
*/

// ⁡⁣⁣⁢The Magic of Chaining Methods⁡
/*
const eurToUsd = 1.1;
console.log(movements);

// ⁡⁢⁣⁣PIPELINE⁡
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// ⁡⁣⁣⁢Coding Challenge #3⁡

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function,
 and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// ⁡⁢⁣⁣coding challenge #3 done⁡

// const calcAvarageHumanAge = ages =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAvarageHumanAge([5, 2, 4, 1, 15, 8, 3]));

///////////////////////////////////////
/*/ ⁡⁣⁣⁢The find Method⁡
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


///////////////////////////////////////
// ⁡⁢⁣⁣some and every⁡
console.log(movements);

// ⁡⁢⁣⁣EQUALITY⁡
console.log(movements.includes(-130));

// ⁡⁢⁣⁣SOME: CONDITION⁡
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// ⁡⁢⁣⁣EVERY⁡
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// ⁡⁢⁣⁣Separate callback⁡
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


///////////////////////////////////////
// ⁡⁣⁣⁢flat and flatMap⁡
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);


///////////////////////////////////////
// ⁡⁣⁣⁢Sorting Arrays⁡

// ⁡⁢⁣⁣Strings⁡
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// ⁡⁢⁣⁣Numbers⁡
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// ⁡⁢⁣⁣Ascending⁡
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// ⁡⁢⁣⁣Descending⁡
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


///////////////////////////////////////
// ⁡⁣⁣⁢More Ways of Creating and Filling Arrays⁡
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// ⁡⁣⁣⁢Empty arrays + fill method⁡
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// ⁡⁣⁣⁢Array.from⁡
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/

///////////////////////////////////////
// ⁡⁣⁣⁢Array Methods Practice⁡

/*/ 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

*/
///////////////////////////////////////
// ⁡⁣⁣⁢Coding Challenge #4⁡

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is
 the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended 
portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it
 to the object as a new property. Do NOT create a new array, simply loop over the array.
  Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little.
 HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
 and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array 
with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!
" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that 
is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
(keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means:
 current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% 
 and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
