function solve(text, checker) {
    let indexOfChecker = text.indexOf(checker);

    if(indexOfChecker < 0){
        return false;
    }
    else{
        return true;
    }


}

console.log(solve('The quick brown fox…', 'the quick brown fox…'));