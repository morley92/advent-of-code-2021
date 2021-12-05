import { readInputFile } from "../helper";

function solution() {
    const lines = getInput()

    const arr = new Array()

    for (let i = 0; i < 999; i++) {
        arr.push(Array(999).fill(0))
    }

    for (const { from, to } of lines) {
        const isNotVerticalOrHorizontal = from.x !== to.x && from.y !== to.y

        if (isNotVerticalOrHorizontal) {
            continue
        }

        const smallestX = Math.min(from.x, to.x)
        const largestX = Math.max(from.x, to.x)
        const smallestY = Math.min(from.y, to.y)
        const largestY = Math.max(from.y, to.y)

        for (let i = smallestX; i <= largestX; i++) {
            for (let j = smallestY; j <= largestY; j++) {
                arr[j][i]++
            }
        }
    }

    let res = 0

    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr.length; y++) {
            if (arr[x][y] > 1) {
                res++
            }
        }
    }

    return res
}

function getInput() {
    return readInputFile<{ from: { x: number, y: number }, to: { x: number, y: number } }>('day5', '\n', d => {
        const [from, to] = d.split(' -> ')

        const [fromX, fromY] = from.split(',').map(Number)
        const [toX, toY] = to.split(',').map(Number)

        return {
            from: {
                x: fromX,
                y: fromY,
            },
            to: {
                x: toX,
                y: toY
            }
        }
    })
}

console.table(solution())