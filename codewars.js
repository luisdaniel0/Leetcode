// // Make a program that filters a list of strings and returns a list with only your friends name in it.

// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// // Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

const friendsList = (arr) => {
  return arr.filter(friends => friends.length === 4);
}



// function friends(arr) {
//   return arr.filter(friend => friend.length == 4);
// }
// // i.e.

// // friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// // Note: keep the original order of the names in the output.

// function friends(friendArray) {
//   return friendArray.filter(friend => friend.length === 4);
// }
// function friends(array) {
//   return array.filter(friend=>friend.length===4)
// }




// function friends(friendArray){
//   return friendArray.filter(friend => friend.length === 4)
// }


// // Your task is to make function, which returns the sum of a sequence of integers.

// // The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// // If begin value is greater than the end, function should returns 0

// // Examples

// const sequenceSum = (begin, end, step) => {
//   var sum = 0;
//   for(var i=begin;i<=end;i+=step)
//   {
//     sum += i;
//   }
//   return sum;
// };

// function friend(friendArray){
//   return friendArray.filter(friend => friend.length === 4)
// }



/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// const twoSum = function (nums, target) {
//   const hashtable = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if (hashtable.has(num2)) {
//       return [i, hashtable.get(num2)];
//     }
//     hashtable.set(num1, i);
//   }
// }



const twoSum = (nums, target) => {
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++){
    let nums1 = nums[i];
    let nums2 = target - nums1;
    if (hashmap.has(nums2)) {
      return [i, hashmap.get(nums2)];
    }
    hashmap.set(nums1,i)
  }
}

let nums = [2,7,9,8,6,5,3]
let target = 10
console.log(twoSum(nums, target));


const twoSum = (nums, target) => {
  const hashmap = new Map();
  for (let i = 0; i < nums.length; i++){
    let nums1 = nums[i];
    let nums2 = target - nums1;
    if (hashmap.has(nums2)) {
      return [i, hashmap.get(nums2)];
    }
    hashmap.set(nums1,i)
  }
}

let nums = [2,7,9,8,6,5,3]
let target = 10
console.log(twoSum(nums, target));

