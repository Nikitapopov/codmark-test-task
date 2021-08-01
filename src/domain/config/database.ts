import { ConnectionOptions } from "typeorm";
import { baseConfig } from "./database-base.config";
import { TestEntity } from "../entity/test/test.entity";

const config: ConnectionOptions = {
    ...baseConfig,
    entities: [
        //[dis/**/*.entity{.ts,.js}"],
        TestEntity
    ]
};

export = config;
