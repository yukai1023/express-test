// app.js
// these codes are same as last unit
const express = require('express')
const app = express()
const port = 3000
// require express-handlebars here
const exphbs = require('express-handlebars')
// setting static files
app.use(express.static('public'))
// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting the route and corresponding response
app.get('/', (req, res ) => {
  res.render('index')
})

app.get('/about', (req, res ) => {
  res.render('about')
})

app.get('/portfolio', (req, res ) => {
  res.render('portfolio')
})

app.get('/contact', (req, res ) => {
  res.render('contact')
})
// Listen the server when it started
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})