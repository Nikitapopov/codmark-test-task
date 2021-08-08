import { forwardRef, Module } from "@nestjs/common";
import { RoleController } from "./role.controller";
import { RoleService } from "./role.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../user/user.module";
import { Role } from "./entity/role.entity";

const entities = [Role];

@Module({
    imports: [
        TypeOrmModule.forFeature(entities),
        forwardRef(() => UserModule)
    ],
    controllers: [RoleController],
    providers: [RoleService],
    exports: [RoleService]
})
export class RoleModule {
}
