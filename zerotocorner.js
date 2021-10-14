var arr=[1,2,3,4,5,0,0,0,0,5,8,1,5,4,];
var newArr1=[];
var newArr2=[]
var elem=0;
function zero(){
for(var i=0;i<arr.length;i++){
    if(arr[i]!=0){
        newArr1.push(arr[i]);
        
    }else{
        newArr2.push(arr[i]);
        
        
    }
    
}
var times=newArr2.length;
for( var j =0; j< times+1; j++){
    newArr1.push(0);
}

return newArr1 ;
}
var result=zero();
console.log(result);
