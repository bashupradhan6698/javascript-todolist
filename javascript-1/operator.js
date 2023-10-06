/* operators*/

/* assignment operator (=) */

let price = 100;


/* arithematic operator(+, -, *, /) */

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2 * 9 / 10);


/* modulus ->(% gives remainder)  */

console.log('10 % 3', 10 % 3)

/* comparision operator -> always gives answer in terms of boolean */

console.log(2 > 1);
console.log(1 > 2);
console.log(2 > 2);
console.log(1 <= 2);


/* equality operator */

console.log('hello' == 'hello')
console.log('hello' + 'world')//concatination

/* typecast */
console.log(1 + '1') //output= 11 changes 1 to string
console.log(100 + 'two') //concatination
console.log(100 - '1') //output= 99 changes 1 to number
console.log(100 * '2') //output= 200 changes 2 to number
console.log(100 * 'two') //output= nan cannot change two to number
console.log(100 - 'two')  //output= nan cannot change two to number

console.log(parseInt('100.100')) // changes string to whole number
console.log(parseFloat('100.100')) //changes string to float value

/* assignment oerator =

equality operator ==
*/

console.log('hello' == 'hello')
console.log('hello' === 'hello')

console.log(1 == 1) //true
console.log(1 == '1') //true

/* strict equality operator*/

console.log(1 === '1') //false chekcs data type also

/* WAP to calcaute a number is odd or even */


function findOddEven(num) {

  if (typeof (num) == "number") {
    if (num % 2 == 0) {
      console.log(`${num} is even`);
    }
    else if (num % 2 == 1) {
      console.log(`${num} is odd`);
    }
  }
  else {
    console.log(`${num} is not a number`)
  }
}

// console.log(num % 2 == 0 ? `${num} is even` : num % 2 == 1 ? `${num} is odd` : `${num} is not a number`)



findOddEven(2);
findOddEven(0);
findOddEven('hello');


// console.log(typeof ('hello'))