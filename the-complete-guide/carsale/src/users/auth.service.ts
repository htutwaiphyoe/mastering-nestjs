import { BadRequestException, Injectable } from "@nestjs/common";

import { UsersService } from "./users.service";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    // check email exists
    const users = await this.userService.find(email);
    if (users.length) throw new BadRequestException("Email is already in use.");
    // hash the password
    // return new user
  }

  signIn() {}
}
