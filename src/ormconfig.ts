import {ConnectionOptions} from 'typeorm';

export const config: ConnectionOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'CatalogBooks',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    logger: 'file',
    migrations: [__dirname + '/migration/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migration',
    },
};
