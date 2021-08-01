import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto } from "./dto";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {
    }

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto.roles);
        return this.userService.create(createUserDto);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.userService.get(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}
