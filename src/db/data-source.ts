import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConnection: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_SERVER,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/entity/**/*.ts'],
  synchronize: false,
  dropSchema: false,
};
