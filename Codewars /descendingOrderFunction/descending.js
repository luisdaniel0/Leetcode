const descendingOrder = (n) => {

  ///convert numbers into string so u can manipulate it
  const convertString = n.toString();
  //split the string into an array of substrings
  const splitString = convertString.split("");
  //sort the array of substrings in descending order
  const sortedString = splitString.sort((a,b)=>{
    return b-a;
  })
  //join the sorted numbers back into a string
  const joinString = sortedString.join('');
  //convert string into an integer and return
  return parseInt(joinString);
  
}