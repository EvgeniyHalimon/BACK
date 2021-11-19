const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('SERVER REQUEST')
    console.log(req.url, req.method)

    res.setHeader('Content-type','application/json')

    /* res.setHeader('Content-type', 'text/html')
    res.write('hello world')
    res.write('<h1>My first server</h1>') */

    const data = JSON.stringify([
        {id: 1, name: 'bolt', color: 'red'},
        {id: 2, name: 'ponder', color: 'blue'},
    ])
    res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})

