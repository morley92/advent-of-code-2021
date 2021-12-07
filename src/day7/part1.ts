import { readInputFile } from "../helper";

function solution() {
    const horizontalPositions = readInputFile<number>('day7', ',', Number)

    const maxHorizontalPosition = Math.max(...horizontalPositions)

    const fuelRequiredToTravelToPositions = []

    for (let i = 0; i < maxHorizontalPosition; i++) {
        let fuelRequiredToTravelToPosition = 0

        for (const horizontalPosition of horizontalPositions) {
            const distance = Math.abs(i - horizontalPosition)
            fuelRequiredToTravelToPosition += distance
        }

        fuelRequiredToTravelToPositions.push(fuelRequiredToTravelToPosition)
    }

    return Math.min(...fuelRequiredToTravelToPositions)
}

console.log(solution())