const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// Converte as requisções do tipo: content-type - application/json
app.use(bodyParser.json());

// Converte as requisções do tipo: content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/', express.static(path.join(__dirname, 'angular')));

// Rota base
app.get("/", (req, res) => {
  res.json({ message: "Bem vindos a aplicação" });
});

require("./app/routes/product.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/commentary.routes")(app);

// Escutar as requisições que chegam
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
