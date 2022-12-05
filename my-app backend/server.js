const express = require("express");

const fs = require("fs");
const cors =require ("cors")


const app = express();

app.use(cors());


app.get("/", (req, res) => {
  fs.readFile(`${__dirname}/pizzas.json`, function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    } else {
      let pizzaData = JSON.parse(data);
      return res.send(pizzaData);
    }
  });
});



// Starts the server to listen to the configured port
app.listen(port, () => {
  console.log(`server is running at: http://127.0.0.1:2022`);
});
