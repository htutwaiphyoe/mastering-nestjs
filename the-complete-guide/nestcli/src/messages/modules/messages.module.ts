import { Module } from "@nestjs/common";
import { MessagesController } from "../controllers/messages.controller";
import { MessageRepository } from "../repositories/messages.repository";
import { MessagesService } from "../services/messages.service";
@Module({
    controllers: [MessagesController],
    providers: [MessageRepository, MessagesService],
})
export class MessagesModule {}
