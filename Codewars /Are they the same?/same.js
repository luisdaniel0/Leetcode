function comp(a, b) {
  
  if(!a || !b){
    return false
  }
    
   if(a.length != b.length){
     return false
   }
  
  
    // Sort the arrays in ascending order
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
  
    // Check if each element of b is the square of the corresponding element of a
    for (let i = 0; i < a.length; i++) {
      if (b[i] !== a[i] * a[i]) {
        return false;
      }
    }
  
    // If all elements pass the check, return true
    return true;
  }