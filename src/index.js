// // index.js
import Config from './config/index';
import connectDB from './db/index.js';
const app = require('./app.js');

async function startServer() {

  app
    .listen(Config.port, () => {
      console.log(`Server is listening on port: ${Config.port}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit(1);
    });

  connectDB();  
}

startServer();

