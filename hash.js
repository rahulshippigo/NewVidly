const bcrypt = require('bcrypt');

async function run() {
    const salt = await bcrypt.genSalt(10);
    bcrypt
    console.log(salt);   
}
run();