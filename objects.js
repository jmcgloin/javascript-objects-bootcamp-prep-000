var playlist = {
  twice: "Say You Love Me",
  gnr: "Mr. Brownstone",
  emf: "Unbelievable"
}

function updatePlaylist(playlist, artist, song) {
  playlist.artist = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
}