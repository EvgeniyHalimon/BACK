const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./docs/text.txt')

const writeStream = fs.createWriteStream('./docs/new-text.txt')

const compressStream = zlib.createGzip()
/* readStream.on('data', (chunk) => {
    writeStream.write(chunk)
}) */

const handleError = () => {
    console.log('error')
    readStream.destroy()
    writeStream.end('finished with error')
}

readStream
.on('error', handleError)
.pipe(compressStream)
.pipe(writeStream)
.on('error',handleError)