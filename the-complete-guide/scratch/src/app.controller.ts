import { Controller, Get } from "@nestjs/common";

@Controller("/scratch")
export class AppController {
    @Get("/hello")
    getHello() {
        return "<h1>Hello, NestJS. Let me master you.</h1>";
    }
    @Get("/bye")
    getBye() {
        return "<h1>Bye for now, see ya tomorrow.</h1>";
    }
}
