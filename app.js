const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', "text/plain");
  response.end('Welcome to my Web Application,\n\nMy name is: Rue');

});

server.listen(port, (err) => {
  if(err){
    return console.log('Something is wrong, shut to light...');
  }
  console.log(`Server Listening on ${port}`);
});
