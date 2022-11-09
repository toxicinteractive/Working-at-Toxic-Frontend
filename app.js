const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine("hbs", expressHandlebars.engine({
    defaultLayout: 'main.hbs'
  }))

app.get('/', function(request, response){
    response.render('index.hbs')
    
})



function getData(){
    var dataString = JSON.parse(data)
console.log(dataString)
}

app.listen(8080)