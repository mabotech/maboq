

// https://nodejsmodules.org/tags/password
// https://www.npmjs.org/package/password-hash

 var passwordHash = require('password-hash');

    var hashedPassword = passwordHash.generate('idea');

    console.log(hashedPassword); 