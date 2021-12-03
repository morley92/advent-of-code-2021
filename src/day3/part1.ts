import { readInputFile } from "../helper";

function solution() {
    const binaries = readInputFile<string>('day3', '\n', s => s)

    const countOfValuesAtPositions = new Array()

    for (const binary of binaries) {
        const digits = binary.split('')

        for (let i = 0; i < digits.length; i++) {
            const digit = digits[i]

            if (!countOfValuesAtPositions[i]) {
                countOfValuesAtPositions[i] = {}
            }

            if (countOfValuesAtPositions[i][digit]) {
                countOfValuesAtPositions[i][digit] += 1
            } else {
                countOfValuesAtPositions[i][digit] = 1
            }
        }
    }

    let gamma = ''
    let epsilon = ''

    for (const countOfValuesAtPosition of countOfValuesAtPositions) {
        if (countOfValuesAtPosition['0'] > countOfValuesAtPosition['1']) {
            gamma += '0'
            epsilon += '1'
        } else {
            gamma += '1'
            epsilon += '0'
        }
    }

    return binaryToDecimal(gamma) * binaryToDecimal(epsilon)
}

function binaryToDecimal(binary: string): number {
    return parseInt(binary, 2)
}

console.log(solution())