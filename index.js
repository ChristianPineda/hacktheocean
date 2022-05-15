const express = require('express')
const app = express()
const path = require('path')

app.set('port',8080)

app.use(express.static(path.join(__dirname, 'public')))

console.log(__dirname)

app.get('/',(req, res)=>{
    res.send('Holiwis')
})

app.listen(app.get('port'), ()=>{
    console.log('Server started on port '+app.get('port'))
}   )