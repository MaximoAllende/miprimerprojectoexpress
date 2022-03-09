const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__filename, "../index.html"));
});
app.post("/ejemplo", function (req, res) {
    res.send("Hola, " + req.body.user_name + " " + req.body.user_apell);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
