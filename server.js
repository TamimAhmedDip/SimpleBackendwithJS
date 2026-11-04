const express = require('express')
const app = express()

const PORT = 8383
console.log('hehe')

let data = {
    name: 'ARU'
}

//HTTPS Verbs and Routes

//Website endpoints

app.get('/', (req, res) => {
    console.log('Yay I hit an endpoint', req.method)
    res.send('<h1>This is a website</h1>')
})

app.get('/dashboard', (req, res) => {
    console.log('I hit the dashboard', req.method)
    res.send('<h1>This is a dashboard</h1>')
})

//API endpoints

app.get('/api/data', (req, res) => {
    console.log('I hit an API endpoint', req.method)
    res.send(data)
})


app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))