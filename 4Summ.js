// Given an array of integers and a target we have to check if there exists a quadruplets (four elements) in the array such that there sum is equal to the given target. Popularly know as 4 sum problem.

// Time complexity: O(2 ^ N) because for each we are calling the same function twice.
// Space complexity: O(2 ^ N) considering the call stack, O(1) other wise.



const fourSum = (arr, n, sum, count) => {
    // if there exists a quadruplets whose sum is equal to the given target
    if (sum == 0 && count == 4) {
      return true;
    }
  
    // base case, if we cannot find a quadruplets
    if (count > 4 || n == 0) {
          return false;
    }
  
    // Recur 
    // considering current element or
    // ignoring current element
   return fourSum(arr, n - 1, sum - arr[n - 1], count + 1) || fourSum(arr, n - 1, sum, count);
  }
//   const arr = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18];
// const sum = 20;
console.log(fourSum(arr, arr.length, sum, 0));


// -------------    using hashing

// Time complexity: O(n ^ 2).
// Space complexity: O(n ^ 2).

const fourSumWithHashing = (arr, sum, n = arr.length) => {
    // hashmap
    const map = new Map();
    
    for(let i = 0; i < n - 1; i++){
      for(let j = i + 1; j < n; j++){
        
        // calc pending target sum
        let val = sum - (arr[i] + arr[j]);
        
        // if pending target is present in the map,
        // then there can be a quadruplet
        if(map.has(val)){
  
          // get all quadruplets whose indexes are not overlapping        
          for(let entries of map.get(val)){
            
            let {x, y} = entries;
            // if Quadruplet don't overlap return true
        if ((x != i && x != j) && (y != i && y != j)){
          return true;
        }
          }
        }
        
        // add current pair
        if(!map.has(arr[i] + arr[j])){
          map.set(arr[i] + arr[j], []);
        }
          
        map.get(arr[i] + arr[j]).push({x: i, y: j});
      }
    }
    
    //return false
    return false;
  }
  const arr = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18];
const sum = 20;
console.log(fourSumWithHashing(arr, sum));
