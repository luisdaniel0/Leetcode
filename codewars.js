// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   var num = 0;

//   for(var i = 0; i < arrayOfSheep.length; i++)
//     if(arrayOfSheep[i] == true)
//       num++;

//   return num;
// }





// function booleanToString(b){
//   return b ? 'true' : 'false';
// }




// function updateLight(current) {

//   if (current === 'green'){
//     current = 'yellow'
//   } else if (current === 'yellow') {
//     current = 'red'
//   } else if (current === 'red') {
//     current = 'green'
//   } else {}

// return current


// }



function strCount(str, letter) {

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter)
      count++;
  }

  return count;

}

//this shit is fucking hard 