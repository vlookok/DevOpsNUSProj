const customer = require("./customer");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");


app = express();
app.use(cors());
app.use(bodyparser.json());

//app.use(seller.router);
app.use(customer.router);

app.listen(8080, () => {
 console.log("Server running on port 8080");
});
