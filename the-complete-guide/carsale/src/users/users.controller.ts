import {
  Controller,
  Post,
  Query,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  UseInterceptors,
  ClassSerializerInterceptor,
} from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/updateUser.dto";
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

  @UseInterceptors(ClassSerializerInterceptor)
  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = await this.userService.findOne(+id);
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
