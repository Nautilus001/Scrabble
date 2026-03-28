import * as readline from 'readline/promises';

export class InputHandler {
    
    ask = async (message: string) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        try {
            return await rl.question(message);
        } finally {
            rl.close();
        }
    }
}