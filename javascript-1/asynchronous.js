/* callback 
-a function passed as variable to other function
*/


/* synchronous vs asynchronous */

function someThing() {
  console.log('do some task')
}



console.log(1)

for (let i = 0; i < 10; i++) {
  console.log('index', i)
  // console.log('')
}



console.log(2)
someThing();
// doSomething();
console.log(3)



/* asynchronous 
-future event
-tasks that runs in background
-doesnt block other codes/task
*/
// setTimeout(someThing, 5000)
// setTimeout(() => {
//   console.log('time-out2')
// }, 5000)

setTimeout(() => {

  console.log('0ms-timeout')
}, 0)

console.log('end')

/* promise 

three phases

-pending state
-completed/resolved state
-rejected state
*/

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('server error')
    resolve('data : [{title: "html"}]')
  }, 2000
  )



})

console.log(promise1);
promise1.then((response) => {
  console.log('promise fulfilled')
  console.log('response', response)

})
  .catch((err) => {
    console.log('catch error first', err)

  })


/* error handling || exception handling */
// let num2 = 3
// let num3 = 3


console.log('finally-ended');


// try {
//   let num1 = num2 + num3;
//   console.log(num1)
// } catch (err) {
//   console.log('error', err.message)
// }

async function fetchData() {

  //In mongodb
  // await DB.user()
  // res.send(user)

  try {
    let data = await promise1
    console.log('data after await', data)
    console.log('after promise')
    // .then((response) => {
    // console.log('promise-fulfilled')
    // console.log(response)
    // })
  } catch (err) {
    console.log('promise error', err)
  }
}

fetchData();


