import { Controller, Post, Query, Body, Get, Param, Delete, Patch } from "@nestjs/common";

import { UsersService } from "./users.service";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { UsersDto } from "./dtos/users.dto";
import { Serialize } from "src/interceptors/serialize.interceptor";

@Controller("auth")
@Serialize(UsersDto)
export class UsersController {
  constructor(private userService: UsersService, private authService: AuthService) {}

  @Post("/signup")
  async createUser(@Body() body: CreateUserDto) {
    const createdUser = await this.authService.signUp(body.email, body.password);
    return createdUser;
  }

  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = await this.userService.findOne(+id);
    return user;
  }

  @Get("/")
  async find(@Query("email") email: string) {
    const user = await this.userService.find(email);
    return user;
  }

  @Patch("/:id")
  async updateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    const user = await this.userService.update(+id, body);
    return user;
  }

  @Delete("/:id")
  async deleteUser(@Param("id") id: string) {
    const user = await this.userService.remove(+id);
    return user;
  }
}
