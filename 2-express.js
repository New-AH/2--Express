express = require('express')
app = express()

path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.set('port', 1337);

app.get(
  '/hello/:name', 
  (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)