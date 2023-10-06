/* 
logical operators
AND 


OR
NOT
*/

// if (true && true) {
//   console.log('both true')
// }
// else {
//   console.log('one or both false')
// }


let user = {
  name: "ram",
  email: "ram@ram.com",
  password: "ram-password"
}

function checkPassword(email, password) {
  if (email == user.email && password == user.password) {
    console.log('user logged in')
  }
  else {
    console.log('invalid')
  }
}

/* OUTPUT */
// checkPassword("ram-password")  //  user logged in 
// checkPassword("ram-wrong-password")  //  Invalid Credentials


checkPassword("ram@ram.com", "ram-password");


/* 
    TODO: 
    create a function checkPassword  
    and 
    if the password matches for above user, print user logged in else print invalid credentials


    as self research check for Logical operators too AND(&&) , OR(||) , NOT(!)
    THEN , 
    MUTATE/UPDATE THE FUNCTION  checkPassword

    checkPassword("ram@ram.com","ram-password")   // user logged in 
    checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
    checkPassword("shayam@shyam.com","ram-password")   // Invalid Credentails


*/




