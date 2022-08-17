//Given two binary strings a and b, return their sum as a binary string.
var addBinary = function(a, b) {
    
    //make the length of both a,b strins equal
    a = a.length>b.length?a:'0'.repeat(b.length-a.length)+a; 
    b = b.length>a.length?b:'0'.repeat(a.length-b.length)+b;
    let carry=0, res=''
  //now that both a,b have equal len start from the end and add the bits
    for(let i=a.length-1;i>=0;i--){
        let sa = a[i]^b[i]^carry; //XOR will give us the least significant bit
        carry = (a[i]=='1' && b[i]=='1') || (carry=='1' &&(a[i]=='1' || b[i]=='1'))
            ?'1':'0' // we check if there are 2 ones in our operation if yes this will lead to a carry or else carry will be zero
        res=sa+res //add the sub answer as the most significant bit to the current res
    }
    return carry==='1'?carry+res:res //after all the operations check if we still have a carry if so add it as the MSB. and return the result.
    
  };
  var res = addBinary('11', '1');
  //console.log(res);
  