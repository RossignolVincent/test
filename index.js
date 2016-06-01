var express = require('express')
var api = express()

api.get('/', function(res, req, next){
    res.send('Hello World')
})

console.log('server started on port 3000')
api.listen(3000)