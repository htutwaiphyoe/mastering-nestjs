import { Controller, Post, Query, Body, Get, Param, Delete, Patch, UseInterceptors } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { SerializeInterceptor } from "src/interceptors/serialize.interceptor";
import { UsersDto } from "./dtos/users.dto";

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

  @UseInterceptors(new SerializeInterceptor(UsersDto))
  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = await this.userService.findOne(+id);
    return user;
  }

  @Get("/")
  async find(@Query("email") email: string) {
    const user = await this.userService.find(email);
    return {
      status: "success",
      data: user,
    };
  }

  @Patch("/:id")
  async updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    const user = await this.userService.update(+id, body);
    return {
      status: "success",
      data: user,
    };
  }

  @Delete("/:id")
  async deleteUser(@Param("id") id: string) {
    const user = await this.userService.remove(+id);
    return {
      status: "success",
      data: user,
    };
  }
}
