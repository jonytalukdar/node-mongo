const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Thank you so much This awesome to learnign some new');
});

app.listen(3000, () => console.log('app is runing in port 3000'));
