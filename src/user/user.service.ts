import { Body, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { v4 as uuid } from "uuid";
import { User } from "./entity/user.entity";
import { RoleService } from "../role/role.service";
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";
import { FindConditions } from "typeorm/find-options/FindConditions";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @Inject(RoleService) private readonly roleService: RoleService
    ) {
    }

    //todo вынести в отдельный crud-сервис
    async find(options?: FindManyOptions<User>) {
        return await this.userRepository.find(options);
    }

    async findOne(conditions?: FindConditions<User>, options?: FindOneOptions<User>) {
        return await this.userRepository.findOne(conditions, options);
    }

    async create(createUserDto: CreateUserDto) {
        const { name, login, password, roles } = createUserDto;

        let user = new User();
        user.id = uuid();
        user.name = name;
        user.login = login;
        user.password = password;
        user.roles = [];
        if (roles?.length > 0) {
            const existRoles = await this.roleService.find({ where: { name: In(roles) } });
            if (existRoles.length !== roles.length)
                throw new HttpException("Invalid list of roles passed", HttpStatus.BAD_REQUEST);
            user.roles = existRoles;
        }

        return this.userRepository.save(user);
    }

    async getAll() {
        return await this.userRepository.find();
    }

    async get(id: string) {
        return await this.userRepository.findOne(id, { relations: ["roles"] });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const { name, password, roles } = updateUserDto;

        const user = await this.userRepository.findOne({ where: { id }, relations: ["roles"] });
        if (!user)
            throw new HttpException(`User with id=${id} not found`, HttpStatus.BAD_REQUEST);

        user.name = name;
        user.password = password;

        const existRoles = await this.roleService.find({ where: { name: In(roles) } });
        if (existRoles.length !== roles.length)
            throw new HttpException("Invalid list of roles passed", HttpStatus.BAD_REQUEST);

        // добавление новых ролей
        existRoles.forEach(newRole => {
            if (!user.roles.find(userRole => userRole.id === newRole.id))
                user.roles.push(newRole);
        });

        // удаление старых ролей
        user.roles.forEach((userRole, ind) => {
            if (!existRoles.find(existRole => existRole.id === userRole.id))
                user.roles.splice(ind, 1);
        });

        return await this.userRepository.save(user);
    }

    async remove(id: string) {
        const user = await this.userRepository.findOne(id);
        if (!user)
            throw new HttpException(`User with id=${id} not found`, HttpStatus.BAD_REQUEST);

        return await this.userRepository.remove(user);
    }

}
