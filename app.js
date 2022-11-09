const express = require("express");
const app = express();
const PORT = 3000;
const allRouter = require("./routers");


app.use(express.json());

app.use(allRouter);

app.listen(PORT, () => {
  console.log("server runnning on port : " + PORT);
});
