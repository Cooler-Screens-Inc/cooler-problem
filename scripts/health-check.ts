import axios from 'axios';

async function main() {
  try {
    // This is intended to be run within the container which is why
    // we use localhost
    await axios.get<{ status: 'ok' }>('http://localhost:4000/status');
    process.exit(0);
  } catch (e) {
    process.exit(1);
  }
}

main();
