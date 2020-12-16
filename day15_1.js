const input = `12,20,0,6,1,17,7`;

const testInput = `0,3,6`;

const parse = () => {
    let numbersSpoken = testInput.split(",").map(x => parseInt(x));

    let turn = numbersSpoken.length + 1;

    while (turn <= 2020) {
        var lastNumber = numbersSpoken[numbersSpoken.length - 1];
        var previousIndex = numbersSpoken.slice(0, numbersSpoken.length - 1).lastIndexOf(lastNumber) + 1;

        var spokenBefore = previousIndex > 0;

        if (spokenBefore) {
            numbersSpoken.push((turn - 1) - previousIndex);
        } else {
            numbersSpoken.push(0);
        }


        turn++;
    }

    return numbersSpoken[numbersSpoken.length - 1]
}

console.log(parse());
