const express = require('express')
var pg = require('pg');
const app = express()
var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port ' + port))
