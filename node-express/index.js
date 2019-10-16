//this is the simple server code

// const express = require('express'),
//      http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();

// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//Express Serve Static Files
//here static pages are loaded from static html page
// const morgan = require('morgan');
// const express = require('express'),
//      http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const app = express();
// app.use(morgan('dev'));
// //this is the path forlaoding statc html pages
// app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {
 
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });






///Express Simple REST
const bodyParser = require('body-parser');     // body parsing middleware. Parse incoming request bodies in a
                                                // middleware before your handlers, available under the req.body property 
const morgan = require('morgan');
const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());                 //middlewARE TO be used is declared herer
//this is the path forlaoding statc html pages







app.use(bodyParser.json());

app.all('/dishes', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (req,res,next) => {
    res.end('Will send all the dishes to you!');
});

app.post('/dishes', (req, res, next) => {
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});
 
app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all dishes');
});

app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});