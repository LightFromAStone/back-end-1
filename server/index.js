const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let friendList = ['Peter', 'Carlie', 'Scott', 'Kyle'];

app.get('/api/users', (req, res) => res.status(200).send(friendList));

app.get('/weather/:temperature', (req, res) => {
   const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
   res.status(200).send(phrase); 
})




const SERVER_PORT = 4000;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));