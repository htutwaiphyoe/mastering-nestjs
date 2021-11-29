import { readFile, writeFile } from "fs/promises";

export class MessageRepository {
    async findOne(id: string) {
        const messages = JSON.parse(await readFile(`${__dirname}/messages.json`, "utf8"));
        return messages[id];
    }
    async findAll() {
        return JSON.parse(await readFile(`${__dirname}/messages.json`, "utf8"));
    }
    async create(content: string) {
        const messages = JSON.parse(await readFile(`${__dirname}/messages.json`, "utf8"));
        const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        messages[id] = {
            content,
            id,
        };

        await writeFile(`${__dirname}/messages.json`, JSON.stringify(messages), "utf8");
    }
}
