export class TreeNode {
    constructor(
        public value: string = "",
        public children: Map<string, TreeNode> = new Map(),
        public isEnd: boolean = false
    ) {}

    toString(): string {
        let arr: string[] = [];
        if(this.children.size === 0) return `${this.value}`;
        this.children.forEach((child) => {
            arr.push(`${this.value} [${child.toString()}],`);
        });
        return arr.join("");
    }

    build(arr: string[]): TreeNode {
        const head = new TreeNode();
        arr.forEach((word) => {
            word = word.toLowerCase();
            let curr = head;
            let wordArr = word.split('');
            wordArr.forEach((letter) => {
                if(!curr.children.has(letter)) curr.children.set(letter, new TreeNode(letter));
                curr = curr.children.get(letter)!;
            });
            curr.isEnd = true;
        });
        return head;
    }
}