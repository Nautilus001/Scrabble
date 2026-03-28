import {join} from "path";
import {TreeNode} from "./treenode.js";
import * as fs from 'fs';
import {existsSync, readFileSync} from "fs";

export class Dictionary {
    private head: TreeNode;
    constructor(words: string[]){
        this.head = TreeNode.prototype.build(words);
    }

    check(word: string) {
        word = word.toLowerCase();
        let wordArr = word.split('');
        let node = this.head;
        wordArr.forEach((letter) => {
            if(node.children.has(letter)) node = node.children.get(letter)!;
            else return false;
        });
        if(node.isEnd === true) return true;
        return false;
    }
}

