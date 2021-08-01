import { forwardRef, Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { RoleModule } from "../role/role.module";
import { User } from "./entity/user.entity";

const entities = [User];

@Module({
    imports: [
        TypeOrmModule.forFeature(entities),
        forwardRef(() => RoleModule)
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {
}
