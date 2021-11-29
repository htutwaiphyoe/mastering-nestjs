import { Controller, Get, Post, Body, Param, NotFoundException, Delete } from "@nestjs/common";
import { CreateMessageDto } from "../dtos/createMessage.dto";
import { MessagesService } from "../services/messages.service";

@Controller("messages")
export class MessagesController {
    constructor(public messagesService: MessagesService) {}
    @Get("/")
    async getAllMessages() {
        return {
            status: "success",
            data: await this.messagesService.findAll(),
        };
    }

    @Post("/")
    async craeteNewMessage(@Body() body: CreateMessageDto) {
        return {
            status: "success",
            data: await this.messagesService.create(body.content),
        };
    }

    @Get("/:id")
    async getMessageById(@Param("id") id: string) {
        const message = await this.messagesService.findOne(id);
        if (!message) throw new NotFoundException("No message found!");
        return {
            status: "success",
            data: message,
        };
    }

    @Delete("/:id")
    async deleteMessageById(@Param("id") id: string) {
        return {
            status: "success",
            data: await this.messagesService.delete(id),
        };
    }
}
