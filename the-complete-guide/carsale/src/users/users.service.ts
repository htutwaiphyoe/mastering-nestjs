import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.userRepo.create({
      email,
      password,
    });

    return this.userRepo.save({ email, password });
  }

  findOne(id: number) {
    return this.userRepo.findOne(id);
  }

  find(email: string) {
    return this.userRepo.find({ email });
  }

  async update(id: number, body: Partial<User>) {
    let user = await this.findOne(id);
    if (!user) throw new Error("No user found!");
    Object.assign(user, body);
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new Error("No user found!");
    return this.userRepo.remove(user);
  }
}
