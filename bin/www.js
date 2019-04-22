import http from 'http';
import app from '../app'; 

const port = parseInt(process.env.PORT, 10) || 8888;
app.set('port', port);

const server = http.createServer(app);
console.log(`we are up on port ${port}`);
server.listen(port);