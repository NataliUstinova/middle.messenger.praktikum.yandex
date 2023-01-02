const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const PATH = path.join(__dirname, '/../dist');

app.set('view engine', 'hbs')
app.use(express.static(PATH));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});