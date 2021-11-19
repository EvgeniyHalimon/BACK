//console.log(global) global object

//console.log(__dirname) // route to file

//console.log(__filename) // route to file with file

//console.log(process) // global obj

const url = new URL('https://www.mtggoldfish.com/pioneer')
console.log(url.hostname)
console.log(url.href)
console.log(url.pathname)
console.log(url.hash)