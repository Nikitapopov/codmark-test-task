import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRoleDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    name: string;

}
