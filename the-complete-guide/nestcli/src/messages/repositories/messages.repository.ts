import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageRepository {
    async getFileData(path) {
        return JSON.parse(await readFile(path, "utf8"));
    }
    async findOne(id: string) {
        const messages = await this.getFileData("messages.json");
        return messages[id];
    }
    async findAll() {
        return await this.getFileData("messages.json");
    }
    async create(content: string) {
        const messages = await this.getFileData("messages.json");
        const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        messages[id] = {
            content,
            id,
        };

        await writeFile(`messages.json`, JSON.stringify(messages), "utf8");
    }
    async delete(id: string) {
        const messages = await this.getFileData("messages.json");
        delete messages[id];
        await writeFile(`messages.json`, JSON.stringify(messages), "utf8");
    }
}
