function getMonthName(index) {
  if (index === 1) {
    console.log("January")
  }
  else if (index == 2) {
    console.log("February")
  }
  else if (index == 3) {
    console.log("March")
  }
  else if (index == 4) {
    console.log("April")
  }
  else if (index == 5) {
    console.log("May")
  }
  else if (index == 6) {
    console.log("June")
  }
  else if (index == 7) {
    console.log("July")
  }
  else if (index == 8) {
    console.log("Aug")
  }
  else if (index == 9) {
    console.log("Sept")
  }
  else if (index == 10) {
    console.log("Oct")
  }
  else if (index == 11) {
    console.log("Nov")
  }
  else if (index == 12) {
    console.log("Dec")
  }
  else {
    console.log('invalid')
  }

}

// function getMonthName(index) {
//   let month = null;
//   switch (index) {
//     case 1: {
//       month = 'January';
//       break;
//     }
//     case 2: {
//       month = 'February'
//       break;
//     }
//     default: {
//       month = 'invalid';
//     }
//   }
//   console.log(month)
// }

getMonthName(1);
getMonthName(2);
getMonthName(15);
getMonthName(0);
