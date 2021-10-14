//sending zeros to a corner
//var arr=[1,2,3,4,5,0,0,0,0,5,8,1,5,4,];
var newArr1=[];
var newArr2=[]
//var elem=0;
function zero(arr,elem){
for(var i=0;i<arr.length;i++){
    if(arr[i]!=elem){
        newArr1.push(arr[i]);
        
    }else{
        newArr2.push(arr[i]);
        
        
    }
    
}
var times=newArr2.length;
for( var j =0; j< times+1; j++){
    newArr1.push(elem);
}

return newArr1 ;
}
var result=zero([5,2,0,5,5,5,5,5,6,0,7,8,9,0,0,5],5);
console.log(result);
