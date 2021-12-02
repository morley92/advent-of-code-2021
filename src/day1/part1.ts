import { readInputFile } from "../helper";

function solution() {
    const depths = readInputFile<number>('day1', '\n', (s) => Number(s))

    let numIncreases = 0

    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i - 1]) {
            numIncreases++
        }
    }

    return numIncreases
}

console.log(solution())