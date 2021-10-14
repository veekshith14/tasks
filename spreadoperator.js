//copy an array with spread operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
       let preArr=[...arr];
       newArr.push(preArr)
  
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  var result1=copyMachine([true, false, true], 2);
  var result2=copyMachine([1,2,3], 5);
  var result3=copyMachine(["it works"], 3);
  
  console.log(result1);
  console.log(result2);
  console.log(result3);

  //combine an array with spread operator

  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence =['learning', ...fragment , 'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());