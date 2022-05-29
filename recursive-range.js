function range(num) {
    let result = 0;

    function addition(num){
        if( num <= 0){
            return result;
        }
        result = result + num;
        addition(num-1)
    }

    addition(num)
    return result;
}

range(4);