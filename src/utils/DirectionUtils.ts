import {Direction} from "../types.js";

export function parseDirection(input: string): Direction | null {
    const normalized = input.trim().toUpperCase();

    if (Object.values(Direction).includes(normalized as Direction)) {
        return normalized as Direction;
    }

    return null;
}