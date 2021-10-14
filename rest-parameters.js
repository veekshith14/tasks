// multiplication of 1st argument with rest of the argument in a function
 function multiply(first,...args){
     return args.map( ele => {
         return first * ele ;
     })
 }
 let multiply1 = multiply(10,4,5,6);
 console.log(multiply1)


 // rest parameter creates a new array but argument object doesn't
 function sortafun(...args){
     var sorted = args.sort((a,b) =>{
         return a - b ;
     });
     
     return sorted;
 }
console.log(sortafun(1,5,3,8,9,99,1000,50,33,44,56,59,1009,102,105));






