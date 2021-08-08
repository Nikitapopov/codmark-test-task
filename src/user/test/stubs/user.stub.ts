import { User } from "../../entity/user.entity";
import { roleStub } from "../../../role/test/stubs/role.stub";
import { uuidStub } from "./uuid.stub";

export const userStub = (): User => {
    return {
        id: uuidStub(),
        login: "mylogin",
        name: "myname",
        password: "mypas",
        roles: []
        // roles: [roleStub()]
    };
};
