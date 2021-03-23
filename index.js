const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

// post

app.post('/addUser', (req, res) => {
  const user = req.body;
  user.id = 12;
  res.send(user);
});

app.listen(3000, () => console.log('app is runing in port 3000'));
