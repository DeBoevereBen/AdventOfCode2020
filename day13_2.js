const input = `1002576
13,x,x,x,x,x,x,37,x,x,x,x,x,449,x,29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,23,x,x,x,x,x,x,x,773,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,17`;

const testInput = `939
17,x,13,19`;

const modInverse = (a, m) => {
    let g = gcd(a, m);

    if (g != 1n) {
        console.log("No Inverse");
    } else {
        return power(a, m - 2n, m)
    }
}

const power = (x, y, m) => {
    if (y === 0n) return 1n;

    let p = power(x, y / 2n, m) % m;
    p = (p * p) % m;

    if (y % 2n === 0n) return p;
    else return ((x * p) % m);
}

const gcd = (a, b) => {
    if (a === 0n) return b;
    return gcd(b % a, a)
}

const parse = () => {
    const lines = input.split("\n");
    let buses = lines[1].split(",").map(val => Number(val) ? BigInt(val) : "x");

    let pairs = buses.map((elm, i) => {
        if (typeof (elm) === "bigint") return [elm, BigInt(i)];
    }).filter(elm => elm)

    let N = 1n;
    console.log(pairs);

    pairs.forEach(p => N *= p[0]);
    console.log(N)

    let Ni = pairs.map(b => N / b[0]);
    console.log(Ni);

    let b = pairs.map((x, i) => i === 0 ? 0n : x[0] - x[1]);
    console.log(b);

    let x = pairs.map((item, i) => modInverse(Ni[i], item[0]));
    console.log(x);

    let bnx = Ni.map((item, i) => item * b[i] * x[i]);
    console.log(bnx);

    let sum = bnx.reduce((acc, curr) => acc + curr);

    return sum - (sum / N) * N;
}

console.log(parse());
