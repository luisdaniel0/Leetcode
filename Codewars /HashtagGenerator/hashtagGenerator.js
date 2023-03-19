
  // delete spaces of the string
  // add a hashtag infront of the string ("'#' + str")
  // charAt and capitalize first letter of every word
  // if input is > 140 return false
  // if input is an empty string return false
  
function generateHashtag (str) {
   if(!str || str.length < 1) return false;
   
   var r = '#' + str.split(' ').map(function(el) {
     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
   }).join('');
   return r.length > 140?false:r;
}