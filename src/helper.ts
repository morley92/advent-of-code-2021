import fs from 'fs'

export function readInputFile<T>(day: string, splitBy: string, mapFn: (arg0: string) => T): T[] {
    const fileContents = fs.readFileSync(__dirname + `/${day}/input.txt`).toString().trim()

    const rows = fileContents.split(splitBy)

    return rows.map(mapFn)
}
