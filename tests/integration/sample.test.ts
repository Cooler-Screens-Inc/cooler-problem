import * as uuid from 'uuid';
import { seed } from '../../scripts/seed';
import { testApi } from '../test-api';

const TEST_DATA = [
  {
    id: uuid.v4(),
    message: 'test-message',
  },
];

describe('Samples', () => {
  beforeAll(async () => {
    await seed(TEST_DATA);
  });

  it('returns all sample data', async () => {
    const result = await testApi.get('/samples');
    expect(result.status).toEqual(200);
    expect(result.data).toHaveLength(1);
    expect(result.data[0].message).toEqual(TEST_DATA[0].message);
  });
});
