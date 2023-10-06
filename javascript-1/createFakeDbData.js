const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha", 'Manisha']


// let arr = [];

// nepaliNames.forEach((element, index) => {
//   arr.push({
//     name: element,
//     email: `${element.toLowerCase()}@gmail.com`,
//     password: `${element.toLowerCase()}${index}`

//   })
//   console.log(arr)
// }
// )


/* using map function*/

let fakeUsers = nepaliNames.map((element, index) => {
  return {
    name: element,
    email: `${element.toLowerCase()}@gmail.com`,
    password: `${element.toLowerCase()}${index}`
  }
})
console.log(fakeUsers)




/* 
TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/