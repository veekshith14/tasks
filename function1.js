//changing the property of the object using function
var myCar = {company:'Honda',model:'Civic',year:'1999'};
function newCar(){
    myCar.company='Ford';
    myCar.model = 'Mustang';
}
var x= 'this is my old car '+  myCar.company;
newCar();
var y = 'this is my new car '+ myCar.company;

console.log(x);
console.log(y);
console.log(myCar);

//Anonymous function

const square = function(number){ 
    return number*number;
}
const first = square(4);
console.log(first);
const first1 = square(6);
console.log(first1);

//factorial through function

const factorial = function fac(n){
    return n<2 ? 1:n*fac(n-1);
}
console.log(factorial(4));

//maping using function as argument
function map(f,a){
    let result = [];
    let i = [];
    for(i=0;i!=a.length;i++)
    result[i]=f(a[i]);
    return result;
  
}
const f = function(x){
return x*x;
}
let number = [0, 2, 4];
let square2 = map(f,number);
console.log(square2);

//recrusive function
function loop(x) {
    if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
      return;
    // do stuff
    loop(x + 1); // the recursive call
  }
  loop(0);


  function foo(i) {
    if (i < 0)
      return;
    console.log(i);
    foo(i - 1);
    console.log(i);
  }
  foo(2);


  //anonymous  function

  var getCode = (function(){
    var apicode = '67abcd';
    return function(){
      return apicode ;
    }
  })();
  console.log(getCode());

  //concatinate
  // function myConcat(separator){
  //   var result = '';
  //   var i ;
  //   for(i=1;i<arguments.length;i++){
  //   result += arguments[i] + separator;
  //   }
  //   return result ;
  // }
  // myConcat(',','red','orange','yellow');
  // console.log(myConcat);

  function myConcat(separator) {
    var result1 = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result1 += arguments[i] + separator;
    }
    return result1;
 }
 // returns "red, orange, blue, "
  myConcat(', ', 'red', 'orange', 'blue');

// returns "elephant; giraffe; lion; cheetah; "
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// returns "sage. basil. oregano. pepper. parsley. "
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

console.log(result1);
var a2 = a.map