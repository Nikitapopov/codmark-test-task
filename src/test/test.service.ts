import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Test } from "../domain/entity/test/test";
import { Repository } from "typeorm";

@Injectable()
export class TestService {
    constructor(
        @InjectRepository(Test) private readonly testRepository: Repository<Test>
    ) {
    }

    async findAll(): Promise<Test[]> {
        return this.testRepository.find()
    }
}
