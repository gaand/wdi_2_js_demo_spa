/* global Spotify*/
/* jshint unused: true */
'use strict';
// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

// Constructor function for a Playlist
// ONLY ONE PLAYLIST IN THIS APP, SO IT'S AN OBJECT LITERAL
Spotify.PlayList = (function(){

  // private variable, array that contains all the songs
  var _songs = [], 
  // The HTML DOM Element for the playlist
  $playListElement;

  // set the HTML Element for the playlist
  function _init(appPlayListElement){
    $playListElement = appPlayListElement;

    // Will eventually be a remote call to get songs from the server 
    _getSongs();
  }
  
  // Dummy function that creates a initial set of songs.
  // We'll get these songs from the backend server later
  function _getSongs(){
    _songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    _songs.push(new Spotify.Song('Teenage spirit', 243, 1.09,'Nivarna'));
    _songs.push(new Spotify.Song('Whole lotta love', 203, 2.99, 'Zeppelin'));
    _songs.push(new Spotify.Song('Mother', 605, 1.49,'Pink Floyd'));
  }

  // Render each song into HTML
  function _render(){
    var id = 1; 
    _songs.forEach(function(song){
     song.render($playListElement, id);
     id++;
    });
  }

  // Return the Object Literal for client code
  return {
    init: _init,
    render: _render
  };
})();
