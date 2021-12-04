import { readInputFile } from "../helper";

function solution() {
    const {numbers, boards} = getData()

    const currentWinners = new Set()

    for (let i = 1; i < numbers.length; i++) {
        const currentNumbers = numbers.slice(0, i)

        for (let j = 0; j < boards.length; j++) {
            const board = boards[j]

            if (isWinningBoard(currentNumbers, board)) {
                currentWinners.add(j)

                if (currentWinners.size === boards.length) {
                    return calculateResult(currentNumbers, board)
                }
            }
        }
    }
}

function calculateResult(winningNumbers: number[], winningBoard: number[][]) {
    const flatWinningBoard = winningBoard.flat()
    const unpickedNumbers = difference(flatWinningBoard, winningNumbers)
    const [winningMove] = winningNumbers.slice(-1)

    return sumNumbersList(unpickedNumbers) * winningMove
}

function isWinningBoard(currentNumbers: number[], board: number[][]) {
    // calculating rows
    for (const row of board) {
        // if these are the same, the row has every number in the moves array
        if (union(currentNumbers, row).length === currentNumbers.length) {
            return true
        }
    }

    // calculating columns
    for (let i = 0; i < board.length; i++) {
        const column = new Array()

        for(let j = 0; j < board.length; j++) {
            const row = board[j]
            column.push(row[i])
        }

        if (union(currentNumbers, column).length === currentNumbers.length) {
            return true
        }
    }

    return false
}

function union(a: number[], b: number[]): number[] {
    return [...new Set([...a,...b])]
}

function difference(a: number[], b: number[]): number[] {
    let difference = new Set(
    [...new Set(a)].filter(x => !new Set(b).has(x)));

    return [...difference]
}

function sumNumbersList(nums: number[]) {
    return nums.reduce((a,b) => a + b, 0)
}

function getData() {
    const [numbers] = readInputFile<number[]>('day4', '\n\n', d => d.split(',').map(Number))

    const [,...boards] = readInputFile<number[][]>('day4', '\n\n', d => {
        const boardRows = d.split('\n')

        const arr = new Array()

        for (const row of boardRows) {
            const sanitizedCells = row.trim().split(' ').map(s => s.replace(/ +(?= )/g,'')).filter(s => s !== '').map(Number)
            arr.push(sanitizedCells)
        }

        return arr
    })

    return {
        boards,
        numbers,
    }
}

console.log(solution())