/* global Spotify*/
'use strict';

var Spotify = Spotify || {};

// Constructor function for a Song
Spotify.Song = function(songTitle, songPrice, songDuration, songArtist){
  this.title = songTitle;
  this.price = songPrice;
  this.duration = songDuration;
  this.artist = songArtist;
};

Spotify.Song.prototype.render = function($playListElement){
  $playListElement.append('<li id="song-"' + this.id + '">' + this.title + '</li>');
};