import { Body, Controller, Param, Post } from "@nestjs/common";
import { Repository } from "typeorm";
import { Role } from "./entity/role.entity";
import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto";

@Controller("role")
export class RoleController {
    constructor(
        private readonly roleService: RoleService
    ) {
    }

    @Post("create")
    create(@Body() createRoleDto: CreateRoleDto) {
        return this.roleService.create(createRoleDto);
    }

    @Post("create")
    remove(@Param() id: string) {
        return this.roleService.remove(id);
    }

}
