const express = require('express');
const app = express();
const port =6061;

app.use(express.static('public')); // serve index.html from 'public' folder

app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;
  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});