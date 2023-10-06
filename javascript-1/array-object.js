console.log("Hello World")
console.log("Hello")

let color = "red";
const PI = 3.14;
console.log("color is: ", color)

/* Data types

PRIMITIVE dara type
-string
-number
-boolean
-undefined
-null

non-primitive data types(collection)
-array- collection of different values
syntax- let <variable>= [<value>,<value>,<value>,<value>]

-collection of simikar data types


-object

syntax

let <variable_name>= {
  <property> : <value>,
  <key> : <value>
}
*/
let user;
console.log("User", user)

let data = null;

console.log("data ", data)

let brand1 = "sony"
let brand2 = "apple"
let brand3 = "samsung"
let brand4 = "google"
let brand5 = "panasonic"

let brands = ["sony", "apple", "samsung", "google", "panasonic"]
console.log(brands)


let array_values = ["string", 1, 2, null, false]
console.log(array_values)

let projector = {
  color: "white",
  price: 50000,
  dimension: 200 * 300,
  brands: [
    {
      name: "samsung",
      est: 19990,
      url: "www.samsung.com"
    },
    {

      name: "lg",
      est: 1900,
      url: "www.lg.com"

    }
  ]
}
console.log("projector", projector);


// let even_numbers=[2,4,6,8]


let course1 = {
  name: "Mern",
  duration: "2-months",
  teachers: [
    {
      name: "xyz",
      phone: 12345
    }
  ]
}

let course2 = {
  name: "Python",
  duration: "3months",
  teachers: [
    {
      name: "adfg",
      phone: 123455
    }
  ]
}

let courses = [course1, course2]

console.log("courses: ", courses);