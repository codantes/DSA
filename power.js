// function to take in power and raise the base to the power using recursion'

function power(base, exp){
    let result = base; 

    function raisePower(exp){
        if(exp === 0){
            return result = 1;
        }
        if(exp === 1){
            return result = result * 1;
        }
        result = result * base;
        raisePower(exp-1);
    }

    raisePower(exp);
    return result;
}
power(2, 9);

