const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const body_parser = require ('body-parser');

app.use(body-body_parser.json()); //req.vody.name
app.use(body_parser.urlencoded({extended:true})); // material /id

app.use(    (req, res, next) => {
    console.log(req.method, ' ', req.path);
}); // GET /api/materials

App.listen(port);
