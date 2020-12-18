const input = `..#..#..
.###..#.
#..##.#.
#.#.#.#.
.#..###.
.....#..
#...####
##....#.`;

const testInput = `.#.
..#
###`;

const getNeigbours = (cube) => {
    const neighbours = [];
    for (let x = cube.x - 1; x <= cube.x + 1; x++) {
        for (let y = cube.y - 1; y <= cube.y + 1; y++) {
            for (let z = cube.z - 1; z <= cube.z + 1; z++) {
                for (let w = cube.w - 1; w <= cube.w + 1; w++) {
                    if (z === cube.z && y === cube.y && x === cube.x && w === cube.w) {
                        continue;
                    }
                    neighbours.push({ x, y, z, w });
                }
            }
        }
    }
    return neighbours;
}

const getNeigbour = (cube, map) => {
    const val = map.get([cube.x, cube.y, cube.z, cube.w].join`,`);
    return !!val;
}

const parse = dataSet => {
    let lines = dataSet.split("\n").map(x => x.split(""));

    let map = new Map();

    lines.forEach((l, y) => {
        l.forEach((v, x) => {
            if (v == "#") {
                map.set([x, y, 0, 0].join`,`, true);
            } else {
                map.set([x, y, 0, 0].join`,`, false);
            }
        });
    });

    for (let i = 0; i < 6; i++) {
        let minx = null;
        let miny = null;
        let minz = null;
        let minw = null;
        let maxx = null;
        let maxy = null;
        let maxz = null;
        let maxw = null;

        map.forEach((val, key) => {
            const split = key.split(",");
            let x = parseInt(split[0]);
            let y = parseInt(split[1]);
            let z = parseInt(split[2]);
            let w = parseInt(split[3]);

            if (minx === null || x < minx) {
                minx = x;
            }
            if (maxx === null || x > maxx) {
                maxx = x;
            }
            if (miny === null || y < miny) {
                miny = y;
            }
            if (maxy === null || y > maxy) {
                maxy = y;
            }
            if (minz === null || z < minz) {
                minz = z;
            }
            if (maxz === null || z > maxz) {
                maxz = z;
            }

            if (minw === null || w < minw) {
                minw = w;
            }
            if (maxw === null || w > maxw) {
                maxw = w;
            }
        });

        let newMap = new Map();
        for (let w = minw - 1; w <= maxw + 1; w++) {
            for (let z = minz - 1; z <= maxz + 1; z++) {
                for (let y = miny - 1; y <= maxy + 1; y++) {
                    for (let x = minx - 1; x <= maxx + 1; x++) {
                        const neighbours = getNeigbours({ x, y, z, w });
                        const active = neighbours.map(x => getNeigbour(x, map)).filter(x => x).length;
                        if (!!map.get([x, y, z, w].join`,`)) {
                            if (active == 2 || active == 3) {
                                newMap.set([x, y, z, w].join`,`, true)
                            } else {
                                newMap.set([x, y, z, w].join`,`, false)
                            }
                        } else {
                            if (active == 3) {
                                newMap.set([x, y, z, w].join`,`, true)
                            } else {
                                newMap.set([x, y, z, w].join`,`, false)
                            }
                        }
                    }
                }
            }
        }
        map = newMap;
    }



    let sum = 0;
    map.forEach((val, key) => {
        if (val) sum++;
    })
    return sum;
}

// console.log(parse(testInput));
console.log(parse(input));

