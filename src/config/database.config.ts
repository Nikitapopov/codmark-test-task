import { ConnectionOptions } from "typeorm";

export const baseConfig: ConnectionOptions = {
    type: 'postgres',

    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    migrations: ["/src/migration/*.js"],
    cli: {
        "migrationsDir": "src/migration",
        "entitiesDir": "src/entity"
    },
    synchronize: false,
    migrationsRun: false,
}
