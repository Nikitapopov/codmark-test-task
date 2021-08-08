import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { baseConfig } from "./config/database.config";
import { UserModule } from "./user/user.module";
import { RoleModule } from './role/role.module';
import { Role } from "./role/entity/role.entity";
import { User } from "./user/entity/user.entity";

const entities = [Role, User]

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...baseConfig,
            entities: entities
        }),
        UserModule,
        RoleModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
