const express = require("express");
const Controller = require("./Controller");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post("/auth", Controller.login);
app.post("/users", Controller.registration);
app.get("/users/:username", Controller.getUser);
app.get("/search", Controller.search);

app.listen(process.env.PORT || 6000, () => console.log("sever started at 6000"));