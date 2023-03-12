const express = require('express')
const app = express()
const port = 3000

app.set('views engine', 'ejs');

app.get('/', (req, res) => {
  res.render('page/home.ejs')
})
app.get('/about', (req, res) => {
  res.render('page/about.ejs')
})
app.get('/contact', (req, res) => {
  res.render('page/contact.ejs')
})
app.get('/program', (req, res) => {
  res.render('page/program.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})