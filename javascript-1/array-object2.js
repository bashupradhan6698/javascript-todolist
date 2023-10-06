/* variables */

let color; //declaration
color = "red"; //initialization
color = "green"; //re-initialization

/* data types 

primitive data types
-string
age=20; donts
var age= 20; donts
let age = 20; do
-number
-boolean
-undefined= if a variable has no value
-null


non primitive: collection

-array


-object
*/

let brand;
console.log("brand", brand);

let price = null;


/*Array
collection of similar data types
Syntax
let <variable_name> = [<value>,<value>,< value>]

*/


let colors = ["red", "green", "blue"]

let stautus = [true, false];


/* object
Syntax:

 let <variable_name> = {
  <key|property|attribute> : <value>,
  <key|property|attribute> : <value>
}
 */

let room_5 = {
  ceiling: "wooden",
  color: 'green',
  projector:
  {
    color: "white"
  }

}

let room_4 = {
  ceiling: 'concrete',
  color: "white"
}

let frontend = {
  tools: ["vscode", 'git']
}

let backend = {
  tools: ['database', 'api', 'api-testing-tools']
}
let web_stack = [frontend, backend]
console.log(web_stack)






let class_1 = {
  class_teacher: {
    name: 'xyz',
    phone: '1234'
  },
  students: [
    {
      name: 'ram',
      roll: 1,
      address: 'bagbazar'
    },
    {
      name: 'shyam',
      roll: 2,
      address: 'pepsicola'
    }
  ]
}
console.log(class_1)


let classes = [
  {
    Section: 'A',
    class_teacher: {
      name: 'xyz',
      phone: 1234
    },
    students: [
      {
        name: 'ram',
        phone: '12345'
      },
      {
        name: 'shyam',
        phone: '9861'
      }
    ]
  },
  {
    Section: 'B',
    class_teacher: {
      name: 'abc',
      phone: 1234
    },
    students: [
      {
        name: 'hari',
        phone: '12345'
      },
      {
        name: 'rita',
        phone: '9861'
      }
    ]
  }

]

console.log(classes)

