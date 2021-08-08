import { CreateUserDto } from "../../dto";
import { uuidStub } from "./uuid.stub";

export const updateUserDtoStub = (): CreateUserDto => {
    return {
        login: 'mylogin',
        name: 'myname',
        password: 'mypas',
        roles: []
        // roles: ['director', 'accountant', 'designer']
    }
}
