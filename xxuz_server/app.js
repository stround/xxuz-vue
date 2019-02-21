const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user.js");
const index = require("./routes/index.js");
const detail = require("./routes/detail.js");
const product = require("./routes/product.js");
const cors = require("cors");
var app = express();
var server = app.listen(5000);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(cors({
  origin:"http://localhost:8080"
}));
app.use("/user",user);
app.use("/index",index);
app.use("/detail",detail);
app.use("/product",product);