import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'password', async: false })
export class PasswordValidation implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        return text.search(/[A-Z]/g) !== -1 && text.search(/[0-9]/g) !== -1;
    }

    defaultMessage(args: ValidationArguments) {
        return 'Password must include capital letter and number';
    }
}
