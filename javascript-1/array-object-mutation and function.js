

let chair1 = {
  code: 'xyz',
  price: 1000
}

let chair2 = {
  code: 'abxc',
  price: 2000
}

let chairs = [chair1, chair2, { code: 'abc', price: 1000 }]
let furnitures = ['tables', chairs]
console.log(furnitures)



/* 
let brands=['sony', 'samsung', 'lg']

INDEX: always starts with 0

*/

let brands = ['sony', 'samsung', 'lg']
brands[4] = 'apple'
brands[1] = 'nosamsung'
console.log('brands', brands)
console.log('second element: ', brands[1])
console.log('Third Index: ', brands[3])


let course = {
  name: 'Mern',
  duration: '3.5month'
}

console.log('course name: ', course.name)
course.duration = 3
course.teacher = 'xyz'
console.log(course)
console.log('course duration: ', course.duration)
console.log('course price: ', course.price)


// sum
// 1,2
// 2,4
// 2,5
// 2,10

// let a = 3;
// let b = 4;
// let result1 = a + b;
// console.log(result1 * result1)

// let c = 1;
// let d = 2;
// let result2 = c + d;
// console.log(result2 * result2)


// console.log('The sum of 1 and 2 is', 1 + 2)
// console.log('The sum of 3 and 5 is', 3 + 5)
// console.log('The sum of 2 and 8 is', 2 + 8)
// console.log('The sum of 1 and 9 is', 1 + 9)
// console.log('10 + 10 = ', 10 + 10)

/* function

dry- do no repeat yourself

syntax
function <functionName>(){
  // code
}
*/
/* 
internally

let num1=1;
let num2=2;

let num1=2;
let num2=4;
*/
function calculateSum(num1, num2) {  //num1 and mun2 are parametres
  // console.log(num1 + '+', num2 + '=', num1 + num2)
  console.log(`${num1} + ${num2} = ${num1 + num2}`)
}

calculateSum(1, 2); // 1 and 2 are arguments
calculateSum(2, 4);

/* template literal */

let greetings = 'Hello';
console.log(greetings + 'world')
console.log(`${greetings} world`)