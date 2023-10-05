const express = require("express");
require("dotenv").config();
const configViewEngine  = require("./configs/viewEngine");
const database = require('./configs/database/index');
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

//Khai báo middleware để express xử lý dữ liệu thô và lưu và CDSL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

database.connect();
//setup view engine
configViewEngine(app);

app.use('/',routes);

app.listen(port, () => {
  console.log(`App already start listen at http://localhost:${port}`);
});
