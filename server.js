const express = require('express')
const app = express()

const PORT = 8383
console.log('hehe')

let data = ['ARU']

//HTTPS Verbs and Routes

//Website endpoints

//middleware
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Yay I hit an endpoint', req.method)
    res.send(`
        <body style="background:pink; color:blue;">
            <h1>Data: </h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        `)
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

app.post('/api/data', (req, res) => {
    let newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('Succesfully deleted off the end of array')
    res.sendStatus(203)
})

app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))