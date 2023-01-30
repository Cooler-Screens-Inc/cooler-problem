import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Logger } from '../logging';
import { dbConnection } from './data-source';

export { dbConnection };

export const AppDataSource = new DataSource(dbConnection);

const MAX_TRIES = 10;

function exponentialBackoff(nTry: number): Promise<void> {
  const delay = 0.5 * Math.pow(2, nTry);
  return new Promise((resolve) => {
    setTimeout(resolve, delay * 1000);
  });
}

export async function connectDB(db: DataSource = AppDataSource) {
  for (let nTry = 0; nTry < MAX_TRIES; nTry++) {
    try {
      await db.initialize();
      Logger.info('established successful connection to appDataSource');
      return;
    } catch (error) {
      Logger.debug(`Failed to connect to db: ${error}`);
      await exponentialBackoff(nTry);
    }
  }

  throw new Error(`Failed to connect to database in ${MAX_TRIES} attempts`);
}
