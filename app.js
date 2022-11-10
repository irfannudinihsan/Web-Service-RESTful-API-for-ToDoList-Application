const express = require("express");
const db = require("./config/db");
const app = express();
const allRouter = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(allRouter)


db.then(() => {
  console.log("database connected!");
}).catch((error) => {
  console.log(error);
});

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
