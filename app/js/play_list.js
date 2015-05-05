// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    songs.push(new Spotify.Song("Lost Cause", 183, 1.99,'Beck'));
    songs.push(new Spotify.Song("Teenage spirit", 243, 1.09,'Nivarna'));
    songs.push(new Spotify.Song("Whole lotta love", 203, 2.99,'Zeppelin'));
    songs.push(new Spotify.Song("Mother", 605, 1.49, 'Pink Floyd'));
    return songs;
  },
  // set the HTML Element for the playlist
  init: function(appPlayListElement){
    $playListElement = appPlayListElement;

    // Will eventually be a remote call to get songs from the server 
    return this.getSongs();
  },
  // Render each song into HTML
  render: function(songs){
    var id = 1; 
    songs.forEach(function(song){
     song.render($playListElement, id);
     id++;
    }); 
  }
};
