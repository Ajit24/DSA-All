var str1="abcdf"
var str2="bcdae"

// Time COmplexity ==>O(nlogn)

// function anagram(str1,str2){
//     var s=str1.split('').sort().join("")
//     var t=str2.split('').sort().join('')
//     return s==t

  
// }
// console.log(anagram(str1,str2))



// Time COmplexity ==>O(n)

function anagram(str1,str2){
    var obj={}
    for(var i=0; i<str1.length; i++){
        if(str1[i] in obj){
            obj[str1[i]]++
        }else{
            obj[str1[i]]=1
        }
    }
    for(var i=0; i<str2.length; i++){
        if(str2[i] in obj){
           obj[str2[i]]--
        }else{
            return false
        }
    }
    for(let key in obj){
        if(obj[key]){
            return false
        }else{
            return true
        }
    }
}
console.log(anagram(str1,str2))