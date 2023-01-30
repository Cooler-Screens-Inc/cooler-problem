import { openApiSpec } from '../src/controllers';
import fs from 'fs';

const output = process.argv[2];
const spec = openApiSpec();

fs.writeFileSync(output, JSON.stringify(spec));
