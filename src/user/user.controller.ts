import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto";

@Controller("user")
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @Post("create")
    async create(@Body() createUserDto: CreateUserDto) {
        const user = await this.userService.create(createUserDto);
        return user ? { success: true } : { success: false };
    }

    @Get()
    async getAll() {
        return this.userService.getAll();
    }

    @Get(":id")
    async get(@Param("id") id: string) {
        return this.userService.get(id);
    }

    @Patch(":id")
    async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        const user = await this.userService.update(id, updateUserDto);
        return user ? { success: true } : { success: false };
    }

    @Delete(":id")
    async remove(@Param("id") id: string) {
        const user = await this.userService.remove(id);
        return user ? { success: true } : { success: false };
    }
}
