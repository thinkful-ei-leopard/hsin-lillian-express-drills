'use strict';

const express = require('express');

const app = express();

app.get('/sum', (req, res) =>{
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send(`The sum of a and b is ${a + b}`); 
});

app.get('/cipher', (req, res) =>{
  const  text= req.query.text.toUpperCase();
  
  const shift = Number(req.query.shift);

  let sum ='';
  
  for(let i=0; i< text.length; i++){

    sum += String.fromCharCode(text.charCodeAt(i)+shift);
    
  }
  res.send(sum);


  
});

app.listen(8000, () => {
  console.log('Express is listening on 8000');
});