import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreateMessageDto } from "../dtos/createMessage.dto";
@Controller("messages")
export class MessagesController {
    @Get("/")
    getAllMessages() {}

    @Post("/")
    craeteNewMessage(@Body() body: CreateMessageDto) {
        console.log(body);
    }

    @Get("/:id")
    getMessageById(@Param("id") id: string) {
        console.log(id);
    }
}
