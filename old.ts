const express = require("express");

const app = express();

app.get("/", (req, res) => {
  for (let i = 0; i < 1e8; i++) {
    // some long running task
  }

  res.send("old finished\n");
});

app.listen(4040, () => console.log(" server at http://localhost:4040"));
