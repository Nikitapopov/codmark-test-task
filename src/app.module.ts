import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestModule } from './test/test.module';
import config from "./domain/config/database";
import { Connection } from "typeorm";
import { baseConfig } from "./domain/config/database-base.config";
import { TestEntity } from "./domain/entity/test/test.entity";

@Module({
    imports: [
        // TypeOrmModule.forRoot(config),
        TypeOrmModule.forRoot({
            ...baseConfig,
            entities: [
                //[dis/**/*.entity{.ts,.js}"],
                TestEntity
            ]
        }),
        TestModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
    constructor(private connection: Connection) {
    }
}
