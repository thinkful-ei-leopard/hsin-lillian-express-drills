'use strict';

const express = require('express');

const app = express();

// app.get('/sum', (req, res) =>{
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);
//   res.send(`The sum of a and b is ${a + b}`); 
// });

// app.get('/cipher', (req, res) =>{
//   const  text= req.query.text.toUpperCase();
  
//   const shift = Number(req.query.shift);

//   let sum ='';
  
//   for(let i=0; i< text.length; i++){
//     sum += String.fromCharCode(text.charCodeAt(i)+shift);
//   }
//   res.send(sum);
// });

app.get('/lotto', (req, res) => {
  let numbers = req.query;

  if(!numbers){
    res.status(400);
    res.send('numbers are required');
  }

  if(!Array.isArray(numbers)) {
    res.status(400)
    res.send('numbers must be an array');
  }

  if(numbers.length !== 6) {
    res.status(400);
    res.send('must have 6 numbers');
  }

  const guesses = numbers
    .map(n => parseInt(n))
    .filter(n => !Number.isNaN(n) && (n >= 1 && n <= 20));

  if(guesses.length !== 6) {
    return res
      .status(400)
      .send('numbers must contain 6 integers between 1 and 20');
  }

  const stockNumbers = Array(20).fill(1).map((_, i) => i + 1);


  let randomNumbers = [];

  for(let i = 0; i < 6; i++){
    const ran = Math.floor(Math.random() * stockNumbers.length);
    randomNumbers.push(stockNumbers[ran]);
    stockNumbers.splice(ran, 1);
  }
  
  let diff = randomNumbers.filter(n => !guesses.includes(n));

  if(diff === 0){
    res.send('Wow! Unbelievable! You could have won the mega millions!');
  }
  else if(diff === 1){
    res.send('Congratulations! You win $100!');
  }
  else if(diff === 2){
    res.send('Congratulations, you win a free ticket!');
  }
  else {
    res.send('Sorry, you lose');
  }
  


});

app.listen(8000, () => {
  console.log('Express is listening on 8000');
});