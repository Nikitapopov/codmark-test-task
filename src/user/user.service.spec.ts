import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { RoleService } from "../role/role.service";
import { createUserDtoStub } from "./test/stubs/createUserDto.stub";
import { userStub } from "./test/stubs/user.stub";
import { uuidStub } from "./test/stubs/uuid.stub";
import { v4 as uuid } from "uuid";
import { updateUserDtoStub } from "./test/stubs/updateUserDto.stub";

jest.mock("uuid");

describe("UserService", () => {
    let service: UserService;

    const mockUserRepository = {
        create: jest.fn().mockImplementation(dto => dto),
        save: jest.fn().mockImplementation(user => Promise.resolve({ ...user, id: uuidStub() })),
        findOne: jest.fn().mockImplementation(id => Promise.resolve({ ...userStub(), id: id })),
        remove: jest.fn().mockImplementation(user => Promise.resolve(user))
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService, {
                    provide: getRepositoryToken(User),
                    useValue: mockUserRepository
                },
                RoleService, {
                    provide: RoleService,
                    useValue: {
                        find: jest.fn().mockReturnValue([])
                    }
                }
            ]
        }).compile();

        uuid.mockImplementation(() => uuidStub());
        service = module.get<UserService>(UserService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("should create a new user record and return that", async () => {
        expect(await service.create(createUserDtoStub())).toEqual(userStub());
    });

    it("should update user record and return that", async () => {
        expect(await service.update(uuidStub(), updateUserDtoStub())).toEqual(userStub());
    });

    it("should remove user record and return that", async () => {
        expect(await service.remove(uuidStub())).toEqual(userStub());
    });
});

