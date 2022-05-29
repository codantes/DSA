//helper rrecursion function 

function outer(input) {
    let outerScoppedVariable = [];

    function helper(helperInput) {
        //code
        helper(helperInput--);
    }

    helper()
    return outerScoppedVariable;
}