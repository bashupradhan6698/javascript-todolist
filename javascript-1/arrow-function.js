function sum(num1, num2) {
  console.log(num1 + num2)
  return num1 + num2;
  console.log('below-return')
}

// let result = sum(1, 200);
// console.log({ result })
// // sum(1, 2); //3

// let result2 = sum(result, 4);

// sum(result2, 100);


let result = sum(sum(50, 50), sum(100, 100));  // sum(100, 200)
console.log({ result })


/* arrow function */
let diff = (num1, num2) => {
  console.log('diff', num1 - num2);
  return num1 - num2;
}


let resultdiff = diff(100, 50)
console.log(`difference of 100 and 50 is ${diff(100, 50)}`)


diff(10, 5);
diff(4, 5);
diff(100, 10);



let f_name = 'john';
let l_name = 'doe';

let printUser = () => f_name + l_name;

console.log('default return value', printUser());



let printFullName = (first, last) => first + last

console.log(printFullName('ram', 'prasad'));
console.log(printFullName('hari', 'prasad'));

