const EventEmitter = require('events')

class Logger extends EventEmitter{
    log = (msg) => {
        console.log(msg)
        this.emit('some-event', {id: 8, text: 'Wow such event'})
    }
}

/* 

вместо экстендс можно сделать так 
const util = require('util')

util.inherits(Logger, EventEmitter)

*/

module.exports = Logger