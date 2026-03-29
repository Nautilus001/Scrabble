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

    async getResponse(
        question: string,
        validator: (input: string) => boolean,
        errorMessage: string = "Invalid input, please try again."
    ): Promise<string> {
        while(true) {
            const resp = await this.ask(question);
            if(validator(resp)) return resp;
            console.log(errorMessage);
        }
    }
}