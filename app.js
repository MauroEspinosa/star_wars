var express=require("express");
var app=express();
var funciones=require("./routes/index");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", funciones.home);

app.get("/star_wars_episode/:episode_number", funciones.single_movie);

app.get("*", funciones.notFound);

app.listen(process.env.PORT || 8080);
