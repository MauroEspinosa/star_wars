﻿var moviesJSON=require("../movies.json");

exports.home=function(req,res){
  var movies=moviesJSON.movies;
  res.render("homepage", {titulo: "Star Wars Movies",
			                   movies:movies});
};

exports.single_movie=function(req,res){
  var episode_number=req.params.episode_number;
  var movies=moviesJSON.movies;

  if(episode_number>=1 && episode_number<=6){
    var movie=movies[episode_number-1];
    var title=movie.title;
    var main_characters=movie.main_characters;
    res.render("movie_single", {movies:movies,
                                title:title,
                                movie:movie,
                                main_characters:main_characters});
  }

  else{
    res.render("notFound", {movies:movies});
  }

};

exports.notFound=function(req,res){
  var movies=moviesJSON.movies;
  res.render("notFound", {movies:movies});
};
