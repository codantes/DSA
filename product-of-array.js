function product(arr){
    let result = 1;

    function multiplier(arr){
        if( arr.length === 0){
            return result;
        }
        result = result * arr[0];
        multiplier(arr.slice(1));
    }
    multiplier(arr);
    return result;
}

product([1,2,3,4]);