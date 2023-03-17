function sumDigits(number){
  const toStrings = Math.abs(number).toString();
  let sum=0;
  for(let i=0;i<toStrings.length;i++){
    sum += parseInt(toStrings[i])
  }
  return sum
}

//Math.abs returns the absolute value of an integer