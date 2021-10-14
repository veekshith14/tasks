function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

 // var arr=[1,2,'LavenderBlush', 'PaleTurquoise', 'FireBrick']
  function htmlColorNames(arr) {
    var arr=[1,2,'LavenderBlush', 'PaleTurquoise', 'FireBrick']
    // Only change code below this line
  let ree= arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    // Only change code above this line
    return ree,arr;
  }
  var result =htmlColorNames();
  console.log(result);
  
 //console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));