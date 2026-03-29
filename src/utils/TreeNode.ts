export class TreeNode {
    constructor(
        public value: string = "",
        public children: Map<string, TreeNode> = new Map(),
        public isEnd: boolean = false
    ) {}

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