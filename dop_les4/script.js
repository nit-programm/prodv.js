const inputString = '\'dsdasdas \'dsa\'das\' sdasd\'';
const regExp = /(\B'|'\B)/g;

const res = regExp.test(inputString);
const res1 = inputString.match(regExp);
const res2 = inputString.replace(regExp, '"');

console.log(res);
console.log(res1);
console.log(res2);