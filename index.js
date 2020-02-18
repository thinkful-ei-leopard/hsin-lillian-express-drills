'use strict';

const express = require('express');

const app = express();

app.get('/sum', (req, res) =>{
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`The sum of a and b is ${a + b}`); 
});

app.listen(8000, () => {
  console.log('Express is listening on 8000');
})