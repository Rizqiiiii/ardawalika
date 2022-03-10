const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(cors());
app.use(express.static("views/assets"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
