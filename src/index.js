const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// HTTP
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('home'); // thì file home.handlebars ở nằm trong {{{body}}}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})