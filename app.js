const http = require('http'); // pobiera bibliotekę

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, response) => { // utworzenie serwer i zdefiniowanie co on ma robić
  if(request.method == "POST" && request.url.toLocaleLowerCase() == "/api/addparticipant"){
    console.log(request.url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
  }
  response.statusCode = 404;
  response.end();
});

server.listen(port, hostname) // uruchamia serwer
console.log(`Server running at http://${hostname}:${port}/`); // komunikat o uruchomieniu serwera