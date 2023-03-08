const twoSum =(nums,target)=>{
  let map = new Map();
  for(let i =0;i<nums.length;i++){
    let num1=nums[i];
    let num2=target - num1
    if(map.has(num2)){
      return [i,map.get(num2)]
    }
    map.set(num1,i)
  }
}

let array = [2, 7, 9, 8, 6, 5, 3]
let targetNumer = 10

console.log(twoSum(array,targetNumer))
console.log(123);




