let arr1 = [1, 2, 3, 4, 5]

let doubled = []

let even_numbers = []; //2,4,6,8
// console.log(doubled); // [2,4,6,8,20]
// for (let index = 0; index < arr1.length; index++) {
//   doubled.push(arr1[index] * 2);
// }

// arr1.shift();
// arr1.splice(1, 1)
// arr1.splice(2, 0, 6, 8);
// arr1.pop()
// // arr1.splice(4, 0, 20)
// arr1.push(20)
// console.log(arr1);

// function doSomething(element, index) {
//   console.log(element, index)
//   doubled.push(element * 2)
// }


let doSomething = (element, index) => {
  console.log(element, index)
  doubled.push(element * 2)
}
/* call back - a function passed to another function as a variable*/

// arr1.forEach(doSomething); //call back

arr1.forEach((element, index) => {
  doubled.push(element * 2)
})
console.log(doubled);



/* for even number */


findEvenNumber = (element) => {
  if (element % 2 == 0) {
    even_numbers.push(element)
  }
}

arr1.forEach(findEvenNumber);

// console.log('even number are', even_numbers)


// arr1.forEach((number) => {
//   if (number % 2 == 0) {
//     even_numbers.push(number)
//   }
// })
// console.log('even number are', even_numbers)




/* map function */


let doubled_numbers = arr1.map((element, index) => {
  // console.log('inside map', element, index)
  return (element * 2)

}
)
// console.log(arr1)
console.log(doubled_numbers)

