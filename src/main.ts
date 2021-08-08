import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationError, ValidationPipe } from "@nestjs/common";
import { ValidationFilter } from "./shared/filters/validation.filter";
import { ValidationException } from "./shared/filters/validation.exception";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(
        new ValidationFilter()
    );
    app.useGlobalPipes(new ValidationPipe({
        exceptionFactory: (errors: ValidationError[]) => {
            console.log(errors);
            const messages = errors.map(
                error => `${error.property} has wrong value: ${Object.values(error.constraints).join(', ')}`
            );
            return new ValidationException(messages);
        }
    }));
    await app.listen(3000);
}

bootstrap();
