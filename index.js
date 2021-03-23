const express = require('express');

const app = express();

const users = ['jerry', 'joney', 'jubayer', 'roney'];

app.get('/', (req, res) => {
  res.send('Thank you so much this is very easy to learn this');
});

app.get('/fruits/banana', (req, res) => {
  res.send({ fruit: 'banana', quantity: 1200, price: 1234 });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

app.listen(3000, () => console.log('app is runing in port 3000'));
