function addOne(start, max) {
    let trats = start.reverse();
    if (trats[0] !== max)
        trats[0]++;
    else
        for (let j = 0; j < trats.length; j++, trats[j] = 0)
            if (trats[j + 1] !== max) {
                trats[j + 1]++;
                break;
            }
    return trats.reverse();
}

function bruteForce(minLength, maxLength, test) {
    let buffer = [];
    let start = new Array(minLength === 0 ? 1 : minLength).fill(0);

    while (true) {
        let sentence = '';
        start.forEach(index => sentence += test[index]);
        buffer.push(sentence);
        if(start.reduce((p, c) => c += p) / start.length !== test.length - 1)
            start = addOne(start, test.length - 1);
        else if (start.length < maxLength)
            start = new Array(start.length + 1).fill(0);
        else break;
    }
    return buffer;
}

module.exports = {
    bruteForce
};
