const cluster = require('cluster');
const numCPUs = 50;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs * 2; i++) {
    cluster.fork();
  }

  /* Restart the slave process in case it gets terminated unexpectedly */
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });

} else {

  console.log(`Worker ${process.pid} started`);
  require("./index");

}