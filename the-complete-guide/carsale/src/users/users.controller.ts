import { Controller, Post, Body } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/createUser.dto";

@Controller("auth")
export class UsersController {
   constructor(private userService: UsersService) {}

   @Post("/signup")
   async createUser(@Body() body: CreateUserDto) {
      const createdUser = await this.userService.create(
         body.email,
         body.password
      );
      return {
         status: "success",
         data: createdUser,
      };
   }
}
