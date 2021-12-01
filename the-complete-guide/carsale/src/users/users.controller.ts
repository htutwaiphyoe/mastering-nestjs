import { Controller, Post, Body } from "@nestjs/common";

import { CreateUserDto } from "./dtos/createUser.dto";
@Controller("auth")
export class UsersController {
    @Post("/signup")
    createUser(@Body() body: CreateUserDto) {
        return body;
    }
}
