import { Controller, Post, Query, Body, Get, Param, NotFoundException } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/createUser.dto";

@Controller("auth")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post("/signup")
  async createUser(@Body() body: CreateUserDto) {
    const createdUser = await this.userService.create(body.email, body.password);
    return {
      status: "success",
      data: createdUser,
    };
  }

  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = await this.userService.findOne(+id);
    if (!user) throw new NotFoundException("No user found!!!");
    return {
      status: "success",
      data: user,
    };
  }

  @Get("/")
  async find(@Query("email") email: string) {
    const user = await this.userService.find(email);
    return {
      status: "success",
      data: user,
    };
  }
}
