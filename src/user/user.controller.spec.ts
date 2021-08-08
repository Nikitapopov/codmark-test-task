import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { createUserDtoStub } from "./test/stubs/createUserDto.stub";
import { successResponseStub } from "./test/stubs/successResponse.stub";
import { uuidStub } from "./test/stubs/uuid.stub";
import { updateUserDtoStub } from "./test/stubs/updateUserDto.stub";

describe("UserController", () => {
    let controller: UserController;

    const mockUserService = {
        create: jest.fn(dto => {
            return {
                id: uuidStub(),
                ...dto
            };
        }),
        update: jest.fn(dto => {
            return {
                id: uuidStub(),
                ...dto
            };
        }),
        remove: jest.fn(dto => {
            return {
                id: uuidStub(),
                ...dto
            };
        })
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService]
        }).overrideProvider(UserService)
            .useValue(mockUserService)
            .compile();

        controller = module.get<UserController>(UserController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });

    it("should create a user", async () => {
        expect(await controller.create(createUserDtoStub())).toEqual(successResponseStub());
    });

    it("should update a user", async () => {
        expect(await controller.update(uuidStub(), updateUserDtoStub())).toEqual(successResponseStub());
    });

    it("should remove a user", async () => {
        expect(await controller.remove(uuidStub())).toEqual(successResponseStub());
    });
});
