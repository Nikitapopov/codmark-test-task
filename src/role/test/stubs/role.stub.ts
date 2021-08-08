import { Role } from "../../entity/role.entity";

export const roleStub = (): Role => {
    return {
        id: '2aae7c5b-6e53-451d-9f42-742b90c951de',
        name: 'myrole',
        users: []
    }
}
