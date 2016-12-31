var express=require("express");
var app=express();
var path = require('path');
var funciones=require(path.join(process.cwd()+"/routes/index"));

app.set('views', path.join(process.cwd() +'/views'));
app.use(express.static(path.join(process.cwd() + '/public')));
app.set("view engine", "ejs");

app.get("/", funciones.home);

app.get("/star_wars_episode/:episode_number", funciones.single_movie);

app.get("*", funciones.notFound);

app.listen(process.env.PORT || 8080);
