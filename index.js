const express = require('express')
const { readFile } = require('fs').promises

const port = 3000

const app = express()

app.get('/', async(req, res)=>{
    res.send(await readFile('./index.html', 'utf-8'))

    res.end()
})

app.get('/fistbump.html', async(req, res)=>{
    res.send(await readFile('./fistbump.html', 'utf-8'))

    res.end()
})

app.listen(port, ()=> console.log('App is avaiable at http://localhost:3000'))