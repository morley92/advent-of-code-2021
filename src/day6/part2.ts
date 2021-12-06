import { readInputFile } from "../helper";

function solution() {
    const input = readInputFile<number>('day6', ',', Number)
    const NUM_DAYS = 256

    const ageMap: Record<number, number> = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
    }

    for (const age of input) {
        ageMap[age]++
    }

    for (let i = 0; i < NUM_DAYS; i++) {
        let newNumsToAdd = 0

        for (const [ageString, count] of Object.entries(ageMap)) {
            const age = Number(ageString)

            if (age === 0) {
                newNumsToAdd = count
            } else {
                ageMap[age - 1] = count
            }
        }

        ageMap[6] += newNumsToAdd
        ageMap[8] = newNumsToAdd
    }

    let result = 0

    for (const num of Object.values(ageMap)) {
        result += num
    }

    return result
}

console.log(solution())