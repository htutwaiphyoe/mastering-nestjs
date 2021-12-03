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

   find(email) {
      return this.userRepo.find({ email });
   }
}
