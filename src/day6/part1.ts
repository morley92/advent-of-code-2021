import { readInputFile } from "../helper";

function solution() {
    const input = readInputFile<number>('day6', ',', Number)

    const NUM_DAYS = 80
    const ages = [...input]

    for (let i = 0; i < NUM_DAYS; i++) {
        const numsToAdd = []

        for (let j = 0; j < ages.length; j++) {
            const age = ages[j]

            if (age === 0) {
                ages[j] = 6
                numsToAdd.push(8)
            } else {
                ages[j]--
            }
        }

        ages.push(...numsToAdd)
    }

    return ages.length
}

console.log(solution())