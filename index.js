const express = require('express'),
     http = require('http');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());



app.all('/books',(req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/plain');
    next();
});
app.get('/books',(req,res,next)=>{
    res.end('Will send all the books to you!');
})
app.post('/books',(req,res,next)=>{
    res.end('Will add the book:' + req.body.name + 'with details' + req.body.description);
})
app.put('/books',(req,res,next)=>{
    res.statusCode=403;
    res.end('Put operation not supported');
})
app.delete('/books', (req, res, next) => {
    res.end('Deleting all books');
});

app.get('/books/:bookId',(req,res,next)=>{
    res.end('will send details of the book:' + req.params.bookId + 'to you');
})
app.post('/books/:bookId',(req,res,next)=>{
    res.statusCode = 404;
    res.end('Post operation not supported on /books ' + req.params.bookId);
});
app.put('/books/:bookId',(req,res,next)=>{
    res.write('Updating the book:' + req.params.bookId + '\n');
    res.end('Will update the book:' + req.body.name+ 'with details:' +req.body.description);
})
app.delete('/books/:bookId',(req,res,next)=>{
    res.end('Deleting book:' + req.params.bookId);
})

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

})

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
