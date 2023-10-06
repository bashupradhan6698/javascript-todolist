

let number = '';
const toNepali = (number) => {
  let temp = number.toString().split("");
  let nepali = '';
  let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

  for (let index = 0; index < temp.length; index++) {
    nepali = nepali + nepali_digits[temp[index]]
  }
  return nepali;
}
console.log(toNepali(2000));

let dashboard = {
  total: 100,
  expired: 24,
  out_of_stock: 20,
  managers_count: 3,

}



let arr_dashboard = Object.entries(dashboard);
console.log(arr_dashboard)

arr_dashboard.forEach((element, index) => {
  let new_dashboard = {};
  new_dashboard[element[0]] = toNepali(element[0])
  return new_dashboard;
})

console.log(new_dashboard);

// dashboard = {
//   total: toNepali(dashboard.total),
//   expired: toNepali(dashboard.expired),
//   out_of_stock: toNepali(dashboard.out_of_stock)
// }

// console.log(dashboard);




/* Object.entries()--converts object to array
 */



/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 

__________________________________________________________________________________________________


let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];


You may need these concepts
  number.toString()
  string.trim()
  string.split()
  loop
  function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

  dashboard = {
      total: "१००"
      expired: "२४",
      out_of_stock: "२०"
  }

  
*/