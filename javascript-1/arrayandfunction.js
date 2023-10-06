let todos = [

  {
    "userId": 1,
    "id": 1,
    "title": "html",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "css",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "js",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]


/* ternary op */



// console.log(`${todos[0].title} is ${todos[0].completed}`)
// console.log(`${todos[1].title} is ${todos[1].completed}`)
// console.log(`${todos[2].title} is ${todos[2].completed}`)
// console.log(`${todos[3].title} is ${todos[3].completed}`)
// console.log(`${todos[4].title} is ${todos[4].completed}`)

/*function  */

function printTodoStatus(index) {
  console.log(`${todos[index].title} is ${todos[index].completed}`)
}


printTodoStatus(0);
printTodoStatus(1);
printTodoStatus(2);
printTodoStatus(3);
printTodoStatus(4);



todos[0].title = 'Hyper Text Markup Language';

console.log(todos[0]);


function todoStatus(index) {

  //if-else 

  // if (todos[index].completed) {
  //   console.log(`${todos[index].title} is completed`);
  // }
  // else {
  //   console.log(`${todos[index]} is in progress`);
  // }

  //Ternary1
  console.log(`${todos[index].title} is ${todos[index].completed ? 'completed' : '' in -progress}`)

  //ternaty2
  // console.log((todos[index].completed) ? `${todos[index].title} is completed` : `${todos[index].title} is in progrerss `)
}


todoStatus(0);
todoStatus(3);

/* Ternary Operator ? */

console.log(true ? 'yes' : 'no');