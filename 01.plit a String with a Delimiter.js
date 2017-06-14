function solve(text, delimater) {
    let result = text.split(delimater);

    console.log(result.join('\n'));
}

solve('One-Two-Three-Four-Five', '-' );