module.exports = function transform(arr) {
    if(!Array.isArray(arr))
        throw new Error();
    
    newArr=[];
    for(let i=0;i<arr.length;i++){
        /*if(isNaN(arr[i]) || typeof(arr[i])==="undefined"){
            i++;}
        else{*/
        switch(arr[i]){
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                newArr.splice(newArr.length-1, 1);
                break;
            case '--double-next':
                if(i!=arr.length-1){
                newArr.push(arr[i+1]);
            }   
                break;             
            case '--double-prev':
                if(!isNaN(arr[i-1]) || typeof(arr[i-1])!=="undefined"){
                     newArr.push(arr[i-1]);}
                break;
            default:
                newArr.push(arr[i]);
            
        }
    
    }
    return newArr;
    // remove line with error and write your code here
};
