import { MessageRepository } from "../repositories/messages.repository";

export class messagesService {
    messagesRepo: MessageRepository;
    constructor() {
        this.messagesRepo = new MessageRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}
