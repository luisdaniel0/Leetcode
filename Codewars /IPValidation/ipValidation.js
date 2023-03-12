function isValidIPv4(ip) {
  // Split the IP address string into its octets
  let octets = ip.split('.');
  
  // Check that there are exactly four octets
  if (octets.length !== 4) {
    return false;
  }
  
  // Check that each octet is an integer between 0 and 255, inclusive
  for (let i = 0; i < octets.length; i++) {
    let octet = parseInt(octets[i]);
    if (isNaN(octet) || octet < 0 || octet > 255) {
      return false;
    }
  }
  
  // If all checks pass, return true
  return true;
}


// This function takes an IPv4 address in dot-decimal format as a string ip and returns true if the address is valid, and false otherwise.

// The algorithm works as follows:

// The IP address string ip is split into an array of its octets using the .split() method with '.' as the separator.

// The function checks that there are exactly four octets. If the number of octets is not equal to four, the function returns false.

// The function checks that each octet is an integer between 0 and 255, inclusive. This is done using a for loop to iterate over each octet in the array of octets. Each octet is parsed into an integer using parseInt(), and then checked to make sure it is not NaN and is within the range of 0 to 255. If any of the octets fail this check, the function returns false.

// If all checks pass, the function returns true.

console.log(isValidIPv4('192.0.2.1'));  // true
console.log(isValidIPv4('255.255.255.0'));  // true
console.log(isValidIPv4('10.0.0.256'));  // false
console.log(isValidIPv4('1234.5678.90'));  // false
console.log(isValidIPv4('192.0.2'));  // false




