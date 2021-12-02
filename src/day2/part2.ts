import { readInputFile } from "../helper";

type Direction = 'forward' | 'down' | 'up'

type Coordinates = {
    x: number;
    y: number;
    aim: number;
}

function solution() {
    const instructions = readInputFile<{ direction: Direction, distance: number }>('day2', '\n', (s) => {
        const [direction, distance] = s.split(' ')
        return {
            direction: direction as Direction,
            distance: Number(distance)
        }
    })

    let startingCoordinates: Coordinates = {
        aim: 0,
        x: 0,
        y: 0
    }

    const { x, y } = instructions.reduce((currentCoordinates, instruction) => computeNewLocation(currentCoordinates, instruction.direction, instruction.distance), startingCoordinates)

    return Math.abs(y) * Math.abs(x)
}

function computeNewLocation(currentCoordinates: Coordinates, direction: Direction, distance: number): Coordinates {
    switch (direction) {
        case 'forward':
            return {
                ...currentCoordinates,
                y: currentCoordinates.y + distance,
                x: currentCoordinates.x + (currentCoordinates.aim * distance)
            }
        case 'up':
            return {
                ...currentCoordinates,
                aim: currentCoordinates.aim - distance
            }
        case 'down':
            return {
                ...currentCoordinates,
                aim: currentCoordinates.aim + distance
            }
        default:
            throw new Error('oops')
    }
}

console.log(solution())