export function swap<T>(items: T[], i: number): T[] {
    if(i > items.length) return items;
    let temp = items[items.length - 1]!;
    items[items.length - 1] = items[i]!;
    items[i] = temp;
    return items;
}
