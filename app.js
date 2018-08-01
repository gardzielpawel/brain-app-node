const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/api/addparticipant', (request, response) => {
  console.log(request.body);
  response.statusCode = 200;
  response.send();
});

app.listen(5000, () => console.log('Example app listening on port 5000!'))
