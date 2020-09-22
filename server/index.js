const express = require('express');
const ctrl = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', ctrl.readMessages);
app.post('/api/messages', ctrl.createMessage);
app.delete('/api/messages/:id', ctrl.deleteMessage);
app.put('/api/messages/:id', ctrl.updateMessage);



app.listen(3001, () =>  console.log('Server is up on port 3001'));