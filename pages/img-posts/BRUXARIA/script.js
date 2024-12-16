window.addEventListener('load', () => {
    let songThumb = "./songs/b_thumb.jpg";
    let songDefault = "./songs/TheWayYouHurtMe.mp3";
    let songTitle = "The Way You Hurt Me"

    const musicLoaded = () => {
        try {
            loadSong(songThumb, songDefault, songTitle, 32);
        } catch (e) {
            setTimeout(function(){musicLoaded()}, 5);
        }
    }
    musicLoaded()

});