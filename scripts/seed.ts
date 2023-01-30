import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { connectDB, dbConnection } from '../src/db';
import { DataSource } from 'typeorm';
import { Sample } from '../src/entity/sample';
import * as uuid from 'uuid';

const seedDbConnection: PostgresConnectionOptions = {
  ...dbConnection,
  logging: true,
  synchronize: true,
  dropSchema: true,
};

const SAMPLE_RECORDS = [
  {
    id: uuid.v4(),
    message: 'Hello, world!',
  },
];

export async function seed(data: Sample[]) {
  const db = new DataSource(seedDbConnection);
  try {
    await connectDB(db);

    const sampleRepo = db.getRepository(Sample);
    const samples = data.map((s) => sampleRepo.create(s));
    await sampleRepo.save(samples);
  } catch (e) {
    console.error(`${e}`);
  } finally {
    db.destroy();
  }
}

if (require.main === module) seed(SAMPLE_RECORDS);
