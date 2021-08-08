import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Role } from "./entity/role.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";
import { FindConditions } from "typeorm/find-options/FindConditions";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";
import { CreateRoleDto } from "./dto";
import { v4 as uuid } from "uuid";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>
    ) {
    }

    //todo вынести в отдельный crud-сервис
    async find(options?: FindManyOptions<Role>) {
        return await this.roleRepository.find(options);
    }
    async findOne(conditions?: FindConditions<Role>, options?: FindOneOptions<Role>) {
        return await this.roleRepository.findOne(conditions, options);
    }

    async create(createRoleDto: CreateRoleDto) {
        const { name } = createRoleDto;
        const existedRole = await this.roleRepository.findOne({where: {name}});
        if (existedRole)
            throw new HttpException(`role with name ${name} already exist`, HttpStatus.BAD_REQUEST);
        const role = new Role();
        role.id = uuid();
        role.name = name;
        return await this.roleRepository.save(role);
    }

    async remove(id: string) {
        const role = await this.roleRepository.findOne(id);
        if (!role)
            throw new HttpException(`role with id=${id} not found`, HttpStatus.BAD_REQUEST);
        return await this.roleRepository.remove(role);
    }


}
