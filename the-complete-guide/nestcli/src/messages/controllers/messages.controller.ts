import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreateMessageDto } from "../dtos/createMessage.dto";
import { MessagesService } from "../services/messages.service";
@Controller("messages")
export class MessagesController {
    messagesService: MessagesService;
    constructor() {
        this.messagesService = new MessagesService();
    }
    @Get("/")
    getAllMessages() {
        return this.messagesService.findAll();
    }

    @Post("/")
    craeteNewMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get("/:id")
    getMessageById(@Param("id") id: string) {
        return this.messagesService.findOne(id);
    }
}
