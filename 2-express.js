express = require('express')
app = express()

app.set('port', 1337)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');

app.get(
  '/hello/:name', 
  (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)