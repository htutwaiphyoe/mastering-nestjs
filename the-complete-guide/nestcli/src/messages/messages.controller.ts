import { Controller, Get, Post, Body, Param } from "@nestjs/common";

@Controller("messages")
export class MessagesController {
    @Get("/")
    getAllMessages() {}

    @Post("/")
    craeteNewMessage(@Body() body: any) {
        console.log(body);
    }

    @Get("/:id")
    getMessageById(@Param("id") id: string) {
        console.log(id);
    }
}
