export class Tile {
    constructor (
        public letter: string,
        public point: number,
    ) {}
    toString(): string{ 
        return `[${this.letter}|${this.point}]`;
    }
}