const EventEmitter = require('events');
const uuid = require('uuid'); // Creates random universal... id

class Logger extends EventEmitter {
    log(msg){
        // Call event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

module.exports = Logger;

//console.log(uuid.v4());