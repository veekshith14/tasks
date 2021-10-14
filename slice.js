function forecast(arr){
    arr=['thunderstrom','is','going','to','be','heavy','impact','on','farmers'];
    let newArray=arr.splice(1,4);
    return arr;
}
var result= forecast();
console.log(result);