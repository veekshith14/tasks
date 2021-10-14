//find if sub array contain the elem if it consists don't write the array if doesn't push the array

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(var i = 0;i<arr.length;i++){
      if(arr[i].indexOf(elem)==-1){
        newArr.push(arr[i]);
      }else{
        continue;
      }
    }
  
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18))
  console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2))
  console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"))