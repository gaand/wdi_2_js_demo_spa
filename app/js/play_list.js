// This will create one global variable for our app.
// It will act as a namespace for our application
var Spotify = Spotify || {};

Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    songs.push({title: "Lost Cause", duration: 183, price: 1.99, artist:'Beck'});
    songs.push({title: "Teenage spirit", duration: 243, price: 1.09, artist:'Nivarna'});
    songs.push({title: "Whole lotta love", duration: 203, price: 2.99, artist: 'Zeppelin'});
    songs.push({title: "Mother", duration: 605, price: 1.49, artist:'Pink Floyd'});
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
     $playListElement.append('<li id="song-' + id.toString() + '" >' + song.title + '</li>');
     id++;
    }); 
  }
};
