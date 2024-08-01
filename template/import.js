const execSync = require('child_process').execSync;

const arg = process.argv[2];

execSync(`npx mbsprite explode ${arg} icons`, {stdio: [0, 1, 2]});