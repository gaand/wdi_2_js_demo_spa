// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

Spotify.Playlist = function(){
  // private songs list 
  var _songs = [];

  // private method, only used by _init method
  function _getSongs(){
    _songs.push(new Spotify.Song("Lost Cause", 183, 1.99,'Beck'));
    _songs.push(new Spotify.Song("Teenage spirit", 243, 1.09,'Nivarna'));
    _songs.push(new Spotify.Song("Whole lotta love", 203, 2.99,'Zeppelin'));
    _songs.push(new Spotify.Song("Mother", 605, 1.49, 'Pink Floyd'));
  };

  // set the HTML Element for the playlist
  _init: function(appPlayListElement){
    $playListElement = appPlayListElement;
    _getSongs(); // call private getSongs method
  };

  // Render each song into HTML
  _render: function(songs){
    var id = 1; 
    songs.forEach(function(song){
     song.render($playListElement, id);
     id++;
    }); 
  };
  return {
    init: _init,
    render: _render
  }
};