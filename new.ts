const cluster = require("cluster");
const os = require("os");
const express = require("express");

const app = express();

const numCpus = os.cpus().length;

app.get("/", (req, res) => {
  for (let i = 0; i < 1e8; i++) {
    // some long running task
  }

  res.send("new finished, pid:" + process.pid);
  // cluster.worker.kill();
});

if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
  // cluster.on('exit', (worker, code, signal) => {
    // console.log(`worker ${worker.process.pid} died`);
    // cluster.fork();
  // });
} else {
  app.listen(4041, () =>
    console.log("server " + process.pid + " at http://localhost:4041")
  );
}
