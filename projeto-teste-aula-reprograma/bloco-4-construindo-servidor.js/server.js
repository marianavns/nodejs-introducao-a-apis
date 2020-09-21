const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Requisiçao realizada')
    res.write('<h1>Ola, meninas!! foi! Segunda! </h1>')
})

server.listen(8000, 'localhost', () => {
    console.log('Servidor rodando na porta 8000')
})