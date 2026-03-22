export class Tile {
    constructor (
        public letter: string,
        public point: number,
    ) {}
    toString(letter: boolean = false): string { 
        if (letter) return `[ ${this.letter}]`;
        return `[${this.letter}|${this.point}]`
    }
}