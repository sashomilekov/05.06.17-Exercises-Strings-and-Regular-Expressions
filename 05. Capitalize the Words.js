function solve(text) {
    let arrText = text.split(' ');
    let result = [];

    for(let word of arrText){
        let upperWord = '';
        upperWord+= word[0].toUpperCase();
        for(let i = 1; i < word.length; i++){
            upperWord+= word[i].toLowerCase();
        }

        result.push(upperWord);
    }
    console.log(result.join(' '));
}

solve("CapitaLize these words");