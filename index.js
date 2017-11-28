const express = require('express')
var pg = require('pg');
const app = express()
var port = process.env.PORT || 8080;

app
  .get('/', (req, res) => res.send('Hello World!'))
  .get('/db', (request, response) =>  {
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      client.query('SELECT * FROM test_table', (err, result) => {
        done();
        if (err)
         { console.error(err); response.send("Error " + err); }
        else
         { response.render('pages/db', {results: result.rows} ); }
      })
    })
  })
  .listen(port, () => console.log('Example app listening on port ' + port))
