const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const parseForm = bodyParser.urlencoded({ extended: false })
const fs = require('fs');

//JSON
let rawdata = fs.readFileSync('data.json')
let parsedData = JSON.parse(rawdata)
let tvSeries = parsedData.results
//sorting by latest airdate
tvSeries.sort((a,b) =>  new Date(b.first_air_date) - new Date(a.first_air_date));


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
app.post('/search', parseForm, function(request, response){
    const searchInput = request.body.searchBar
    const searchedSeries = tvSeries.filter(series=>{
        return series.name.includes(searchInput)
    })

    console.log('Search input: ', searchInput)
    console.log('Search resut', searchedSeries)
    const model ={
        series: searchedSeries
    }
    response.render('search_results.hbs', model)
})
app.get('/individual_series/:id', function(request,response){
    const clickedSeriesId = request.params.id
    const clickedSeries = tvSeries.find(series=>{
        return series.id == clickedSeriesId
    })
    const model ={
        series: clickedSeries
    }
    response.render('individual_series.hbs', model)

})

app.listen(8080)
console.log('Listening to port 8080')