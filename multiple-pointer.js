function unique(arr){
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
     
    }
    return i - 1;
}

unique([1,1,2,3,4,5,7,8]);
