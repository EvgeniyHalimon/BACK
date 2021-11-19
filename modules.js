const os = require('os')

const {name : user, sayHi } = require('./Test')

console.log(user)

const newName = 'Tommy'

console.log(os.platform(), '~', os.release())

