import {
    IsArray,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength,
    Validate
} from "class-validator";
import { PasswordValidation } from "../../shared/filters/custom-validation/PasswordValidation";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    login: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    @Validate(PasswordValidation)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(255)
    name: string;

    @IsArray()
    @IsNotEmpty()
    roles: string[];
}
