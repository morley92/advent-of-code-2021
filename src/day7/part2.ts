import { readInputFile } from "../helper";

function solution() {
    const horizontalPositions = readInputFile<number>('day7', ',', Number)

    const maxHorizontalPosition = Math.max(...horizontalPositions)

    const fuelRequiredToTravelToPositions = []

    for (let i = 0; i < maxHorizontalPosition; i++) {
        let fuelRequiredToTravelToPosition = 0

        for (const horizontalPosition of horizontalPositions) {
            const distance = Math.abs(i - horizontalPosition)
            fuelRequiredToTravelToPosition += calcRealDistance(distance)
        }

        fuelRequiredToTravelToPositions.push(fuelRequiredToTravelToPosition)
    }

    return Math.min(...fuelRequiredToTravelToPositions)
}

function calcRealDistance(distance: number) {
    let res = 0

    for (let i = 0; i < distance; i++) {
        res += i + 1
    }

    return res
}

console.log(solution())