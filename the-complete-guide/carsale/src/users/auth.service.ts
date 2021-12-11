import { BadRequestException, Injectable } from "@nestjs/common";
import { randomBytes, scrypt } from "crypto";
import { promisify } from "util";

import { UsersService } from "./users.service";

const scryptPromise = promisify(scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    // check email exists
    const users = await this.userService.find(email);
    if (users.length) throw new BadRequestException("Email is already in use.");
    // hash the password
    // 1. generate salt
    const salt = randomBytes(8).toString("hex");
    // 2. generate hash
    const hash = (await scryptPromise(password, salt, 32)) as Buffer;
    // 3. join salt and hash
    const result = `${salt}.${hash.toString("hex")}`;
    // return new user
    const user = await this.userService.create(email, result);
    return user;
  }

  signIn() {}
}
