import { readInputFile } from "../helper";

function solution () {
    const depths = readInputFile<number>('day1', '\n', (s) => Number(s))

    const SLICE_SIZE = 3

    let numIncreases = 0

    for (let i = 1; i < depths.length - 2; i++) {
        const slice = depths.slice(i, i + SLICE_SIZE)
        const sliceSum = sumSlice(slice)

        const previousSlice = depths.slice(i - 1, i - 1 + SLICE_SIZE)
        const previousSliceSum = sumSlice(previousSlice)

        if (sliceSum > previousSliceSum) {
            numIncreases++
        }
    }

    console.log(numIncreases)
}

function sumSlice(slice: number[]) {
    return slice.reduce((a,b) => a + b, 0)
}

solution()