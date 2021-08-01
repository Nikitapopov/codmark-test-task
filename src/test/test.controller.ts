import { Controller, Get } from "@nestjs/common";
import { TestService } from "./test.service";
import { Test } from "../domain/entity/test/test";

@Controller("test")
export class TestController {
    constructor(private readonly testService: TestService) {
    }

    @Get()
    findAll(): Promise<Test[]> {
        return this.testService.findAll();
    }
}
