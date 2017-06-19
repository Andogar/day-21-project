var loremIpsum = require('lorem-ipsum')
var express = require('express')
var app = express()

app.use(express.static('.'));

app.get('/lorem/:number', function (req, res) {
     res.send(loremIpsum({count: req.params.number, units: 'paragraphs'}));
})

app.get('/lorem', function (req, res) {
     res.send(loremIpsum({units: 'paragraphs'}));
})

app.listen(3000, () => {

});