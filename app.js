const fs = require('fs')
fs.readFile('./sometext.txt', 'utf8', (error, data) => {
    fs.mkdir('./wow-such-folder', () => {})
    fs.writeFile('./wow-such-folder/newtext.txt', `${data} i'm clone`, () => {
        //create a file at the specified path
    })
    fs.mkdir('./folder', () => {})
    fs.writeFile('./folder/new.txt', `${data} i'm another clone`, () => {
        //create a file at the specified path
    })
})

// without arg utf8 we must write in console data.toString

setTimeout(() => {
    if(fs.existsSync('./folder/new.txt')){
        fs.unlink('./folder/new.txt', () => {})
    }
}, 3000);

setTimeout(() => {
    if(fs.existsSync('./folder')){
        fs.rmdir('./folder', () => {})
    }
}, 5000);