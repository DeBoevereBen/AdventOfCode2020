const input = `1002576
13,x,x,x,x,x,x,37,x,x,x,x,x,449,x,29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,x,x,773,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,17`;

const testInput = `939
7,13,x,x,59,x,31,19`;

const parse = () => {
    const lines = input.split("\n");
    const timeStamp = parseInt(lines[0]);
    const buses = lines[1].split(",").filter(x => x !== "x").sort((a, b) => a - b);

    let firstBus;
    let i = timeStamp;

    while (!firstBus) {
        var possibleBusses = buses.filter(x => i % x == 0);
        if (possibleBusses.length > 0) {
            firstBus = { possibleBusses, i };
            break;
        }
        i++;
    }

    return (firstBus.i - timeStamp) * possibleBusses[0]
}

console.log(parse());
