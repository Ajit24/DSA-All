//An algorithm to check if given number is Armstrong number in javascript.

// Time complexity: O(logn) or O(d).- We are extracting each digit from the number, so Time complexity is O(logn)
//Space complexity: O(1).- We are using constant space, so



let isArmstrong = (num) => {
    let sum = 0;
    //store the actual number to check later
    let temp = num;
  
    //Extract each digit of number
    while(num > 0){
      //get the last digit of the number
      let d = parseInt(num % 10);
    
      //find the cube
      d = d ** 3;
      sum = sum + d;
    
      //reduce the number
      num = parseInt(num / 10);
    }
    
    //Check if number equals to the cubed sum
    return temp === sum;
  }
//   console.log(isArmstrong(153));
// console.log(isArmstrong(154));

// ------------ 

// An algorithm to find all the Armstrong numbers between the two numbers.
// Input:
// 100 200
// 100 400
// 0   100

// Output:
// 153

// 153
// 370
// 371

// 0
// 1

//function to check if given number is Armstrong or not
let Armstrong = (num) => {
  let sum = 0;
  //store the actual number to check later
  let temp = num;

  //Extract each digit of number
  while(num > 0){
    //get the last digit of the number
    let d = parseInt(num % 10);
  
    //find the cube
    d = d ** 3;
    sum = sum + d;
  
    //reduce the number
    num = parseInt(num / 10);
  }
  
  //Check if number equals to the cubed sum
  return temp === sum;
}

//Function to print all the Armstrong number
let printArmstrong = (start, end) => {

  //loop through given range of numbers
  for(let i = start; i <= end; i++){

     //If the it is Armstrong then print
     if(Armstrong(i)){
       console.log(i);
     }
  }
}
printArmstrong(0, 100);
printArmstrong(100, 200);
//printArmstrong(300, 700);
