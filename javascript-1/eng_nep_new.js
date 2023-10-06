let dashboard = {
  total: 100,
  expired: 24,
  out_of_stock: 20,
  managers_count: 3,

}
let arr_object = Object.entries(dashboard)
console.log(arr_object);

arr_object.forEach((element, index) => {
  console.log(element, index)
}



)

// output

// [ 'total', 100 ] 0
// [ 'expired', 24 ] 1
// [ 'out_of_stock', 20 ] 2
// [ 'managers_count', 3 ] 3