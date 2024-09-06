
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.get('/home', (req, res) => {
  res.render('home.ejs');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
