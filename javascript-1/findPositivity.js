function testPositivity(num) {

  /* comparision operator 
  
  <, >, <=, >=, ==
  
  */
  if (typeof (num) == 'number') {
    if (num > 0) {
      console.log(`${num} is positive`); //` template literal/ string literal`
    }
    else if (num < 0) {
      console.log(`${num} is negative`);
    }
    else if (num == 0) {
      console.log(`${num} is zero`)
    }
    else {
      console.log(`${num} is not a number`);
    }
  }
}


testPositivity(1);
testPositivity(0);
testPositivity(-2);
testPositivity('hello');


console.log(1 + '1'); //1 in being converted to string typecast
console.log('hello' + 'world')
console.log(1 - 1)
console.log(1 - '1') //'1' is being converted to number

/* assignment oerator =

equality operator ==
*/

console.log('hello' == 'hello')
console.log('hello' === 'hello')

console.log(1 == 1) //true
console.log(1 == '1') //true

/* strict equality operator*/

console.log(1 === '1') //false chekcs data type also



