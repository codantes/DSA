//function calling itself again and again
//call stack ~ stack data structure to call recursive code
// base case ~ condition where recursion ends
// call recursion with different input

function countdown(num) {
    if(num <= 0){
        console.log("all done!");
        return;
    }
     console.log(num);
    num--;
    countdown(num);
}

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(4);

/*
    sumRange(4)
        return 4 + sumRange(3)
                    return 3 + sumRange(2)
                                return 2 + sumRange(1)
                                            return 1

    sumRange(4)
        return 4 + sumRange(3)
                    return 3 + sumRange(2)
                                return 3

    sumRange(4)
        return 4 + sumRange(3)
                    return 3 + 3
    sumRange(4)
        return 4 + 6

    return 10;
*/


function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1);
}

factorial(3)