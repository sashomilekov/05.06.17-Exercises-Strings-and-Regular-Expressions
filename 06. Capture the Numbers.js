function solve(input) {
    let regex = /\d+/g;

    let result = '';

    for(let str of input) {
        result+=str;
    }

     console.log(result.match(regex).join(' '));
}

solve(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45']);
