import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestEntity } from "../domain/entity/test/test.entity";

const entities = [TestEntity];

@Module({
    imports: [
        TypeOrmModule.forFeature(entities)
    ],
    exports: [
        // TypeOrmModule.forFeature(entities)
        TypeOrmModule
    ]
})
export class TestModule {
}
