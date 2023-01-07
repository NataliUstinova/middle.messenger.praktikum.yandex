const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const PATH = path.join(__dirname, '/../dist/index.html');

app.set('view engine', 'hbs')
// app.use(express.static(PATH));

app.get('*', function(req, res) {
  res.sendFile(PATH);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
