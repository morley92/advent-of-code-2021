import { readInputFile } from "../helper";

function solution() {
    const input = readInputFile<number[]>('day9', '\n', i => i.split('').map(Number))

    const smallestNums = []

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const left = input[i]?.[j - 1]
            const right = input[i]?.[j + 1]
            const above = input[i - 1]?.[j]
            const below = input[i + 1]?.[j]

            const value = input[i][j]
            const adjacentValues = [left, right, above, below]

            const isSmallest = adjacentValues.every(av => {
                return av === undefined || av > value
            })

            if (isSmallest) {
                smallestNums.push(value)
            }
        }
    }

    return sumNumsPlusOne(smallestNums)
}

const sumNumsPlusOne = (nums: number[]) => {
    return nums.reduce((acc, val) => acc + val, 0) + nums.length
}

console.log(solution())