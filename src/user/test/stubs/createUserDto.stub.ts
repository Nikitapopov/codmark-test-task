import { CreateUserDto } from "../../dto";
import { uuidStub } from "./uuid.stub";

export const createUserDtoStub = (): CreateUserDto => {
    return {
        login: 'mylogin',
        name: 'myname',
        password: 'mypas',
        roles: []
        // roles: ['director', 'accountant', 'designer']
    }
}
