import { readInputFile } from "../helper";

function solution() {
    const binaries = readInputFile<string>('day3', '\n', s => s)

    const oxygenGeneratorRating = getResult(binaries, 0, {
        dominant: '1',
        nonDominant: '0',
    })

    const co2ScrubberRating = getResult(binaries, 0, {
        dominant: '0',
        nonDominant: '1',
    })

    return binaryToDecimal(oxygenGeneratorRating) * binaryToDecimal(co2ScrubberRating)
}

function getResult(binaries: string[], index: number, { dominant, nonDominant }: { dominant: '0' | '1', nonDominant: '0' | '1' }): any {
    const countOfValuesAtPosition = countOfValuesAtPositions(binaries)[index]

    const newBinaries = binaries.filter(binary => {
        if (countOfValuesAtPosition['0'] > countOfValuesAtPosition['1']) {
            return binary[index] === nonDominant
        } else if (countOfValuesAtPosition['0'] === countOfValuesAtPosition['1']) {
            return binary[index] === dominant
        } else {
            return binary[index] === dominant
        }
    })

    if (newBinaries.length === 1) {
        return newBinaries[0]
    }

    return getResult(newBinaries, index + 1, { dominant, nonDominant })
}

function countOfValuesAtPositions(binaries: string[]) {
    const counts = new Array()

    for (const binary of binaries) {
        const digits = binary.split('')

        for (let i = 0; i < digits.length; i++) {
            const digit = digits[i]

            if (!counts[i]) {
                counts[i] = {}
            }

            if (counts[i][digit]) {
                counts[i][digit] += 1
            } else {
                counts[i][digit] = 1
            }
        }
    }

    return counts
}

function binaryToDecimal(binary: string): number {
    return parseInt(binary, 2)
}

console.log(solution())