const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const fs = require('fs');

//JSON
let rawdata = fs.readFileSync('data.json')
let parsedData = JSON.parse(rawdata)
let tvSeries = parsedData.results

app.engine("hbs", expressHandlebars.engine({
    defaultLayout: 'main.hbs'
}))
app.use(express.static('public'))

app.get('/', function (request, response) {
    const model = {
        series: tvSeries
    }
    response.render('index.hbs', model)
})

app.listen(8080)
console.log('Listening to port 8080')