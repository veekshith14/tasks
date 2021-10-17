var str = 'hello this is a paragraph';
var arr = str.split('');
var str2=" ";
console.log(arr);
for(var i=arr.length-1;i>=0;i--){
    var str1=arr[i];
     str2 =str2.concat(str1);
    console.log(str2);
}



function reverseString(str) {
    var arr=str.split('');
    var empty='';
    for(var i =arr.length-1;i>=0;i--){
      var result = arr[i];
       empty =empty.concat(arr[i]);
  
    }
    console.log(empty)
    return empty;
  }
  
  reverseString("hello");
  reverseString("Greetings from Earth")