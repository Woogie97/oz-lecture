// function add(a, b) {
//   return a + b;
// }
// const result1 = add(2, 3); //5
// const result2 = add("나는", "태민");
// const result3 = add(true, false);

// let num1 = 2;
// let num2 = 3;
// const result4 = add(num1, num2); // 인수

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => a + b;

// function addTotal(add1) {
//   return add1;
// }

// addTotal(1);
// let a = addTotal(add(1, 2));
// console.log(a);

// const add = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };

// const add5 = add(5);
// const add5and10 = add5(10);

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5

function cal(func, num1, num2) {
  return func(num1, num2);
}
console.log(cal(add, 2, 3));

function addTotal(add1, add2) {
  return add1(add2(1, 2), 3);
}
const total = addTotal(add, add);
console.log(total);

function addTotalMistake(add1, add2) {
  return add(add1, add2);
}
console.log(addTotalMistake(add(1, 2), add(3, 4)));
{
  /* <button onclick="handleClick()"> </button> */
}
