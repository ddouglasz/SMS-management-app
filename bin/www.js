// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8888;
app.set('port', port);

const server = http.createServer(app);
console.log(`we are up on port ${port}`);
server.listen(port);