/* falsy values

-false
-undefined
-null
-0
-NaN
- -0
- '' empty string
*/



let user = {
  name: 'ram',
  password: '@#$'
}

/* if(true) not necessary in if else */




if (() => { }) {  //if(1234)
  console.log('has password')
}
else {
  console.log('do not have')
}
