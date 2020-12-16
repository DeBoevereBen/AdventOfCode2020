const input = `12,20,0,6,1,17,7`;

const testInput = `0,3,6`;

const parse = () => {
    let numbers = input.split(",").map(x => parseInt(x));

    let numbersSpoken = {};
    numbers.slice(0, numbers.length - 1).forEach((n, i) => {
        numbersSpoken[n] = i + 1
    });
    let turn = numbers.length;
    let lastSpoken = numbers[numbers.length - 1];

    while (turn < 30000000) {
        const obj = numbersSpoken[lastSpoken];

        if (obj) {
            numbersSpoken[lastSpoken] = turn;
            lastSpoken = turn - obj;
        } else {
            numbersSpoken[lastSpoken] = turn;
            lastSpoken = 0;
        }


        turn++;
    }

    return lastSpoken
}


console.log(parse());

