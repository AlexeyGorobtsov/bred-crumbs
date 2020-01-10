const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./src/data");

app.use(cors());
app.get("/", function(request, response){
    response.json(data);
});

app.get("/root_dir", function(request, response) {
    response.json(data.find(item => item.label === "root_dir"))
});

app.listen(3030);