// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

Spotify.PlayList = (function(){
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
  function _init(appPlayListElement){
    $playListElement = appPlayListElement;
    _getSongs(); // call private getSongs method
  };

  // Render each song into HTML
  function _render(){
    _songs.forEach(function(song){
     song.render($playListElement);
    }); 
  };

  return {
    init: _init,
    render: _render
  }
})();