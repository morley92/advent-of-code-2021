import { readInputFile } from "../helper";

function solution() {
    const input = readInputFile<{ signalPatterns: string[], outputValues: string[] }>('day8', '\n', i => {
        const [patterns, outputs] = i.split(' | ')

        return {
            signalPatterns: patterns.split(' '),
            outputValues: outputs.split(' ')
        }
    })

    const segmentCounts = new Set([2, 4, 3, 7])

    let result = 0

    for (const { outputValues } of input) {
        for (const outputValue of outputValues) {
            if (segmentCounts.has(outputValue.length)) {
                result++
            }
        }
    }

    return result
}

console.log(solution())