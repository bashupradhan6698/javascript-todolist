/* var vs let vs const

var is a global scope variable
let and const are block scope variable


*/




var temp = 'Web';
let arr = [1, 2, 3];

numbers = [5, 4, 3, 2, 1]

let change_number = true;


if (change_number) {
  let arr = []  //for storing even numbers
  numbers.forEach(num => {
    if (num % 2 == 0)
      arr.push(num);

  });
  console.log(arr)
}


// if (true) {
//   let arr = [100, 200] //let arr is only for this
//   console.log(arr)
// }


function doSomething() {
  let number = 100;
}

console.log('Original array', arr)