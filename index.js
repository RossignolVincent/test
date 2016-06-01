var express = require('express')
var api = express()

api.get('/', function(req, res, next){
    res.send('Hello world')
})

console.log('server started on port 3000')
api.listen(3000)

module.exports = api