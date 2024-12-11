window.addEventListener('load', () => {
    let songThumb = "./songs/b_thumb.jpg";
    let songDefault = "./songs/TheWayYouHurtMe.mp3";

    const musicLoaded = () => {
        try {
            loadSong(songThumb, songDefault, 32);
        } catch (e) {
            setTimeout(function(){musicLoaded()}, 5);
        }
    }
    musicLoaded()

});