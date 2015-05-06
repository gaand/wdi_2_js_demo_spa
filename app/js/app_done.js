/* global Spotify, $ */
'use strict';

$(document).ready(function(){
  Spotify.PlayList.init($('#spotify-songs'));
  Spotify.PlayList.render();
});


