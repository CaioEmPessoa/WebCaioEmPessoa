function shuffle(array) {
    let currentIndex = array.length;
    
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
    
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

const changePfp = (dir) => {
    console.log(imgIndex)
    
    if (dir) {
        if (imgIndex >= imgs.length-1) { imgIndex = 0; }
        else {imgIndex += 1; }
    } else {
        if (imgIndex <= 0) { imgIndex = imgs.length - 1; }
        else {imgIndex -= 1; }
    }
    pfpImg.src = "/src/imgs/pfp/" + imgs[imgIndex];
}

let imgs = [];
let imgIndex = 0;
const pfpImg = document.getElementById("pfp-img");

fetch('/src/imgs/pfp/index.html')
.then(response => response.json())
.then(img_l => {
    shuffle(img_l);
    imgs = img_l
    pfpImg.src = "/src/imgs/pfp/" + imgs[imgIndex];

    document.getElementById("right-arrow").onclick = () => {changePfp(1)};
    document.getElementById("left-arrow").onclick = () => {changePfp(0)};
});

// MUSIC THAT WILL PLAY
window.addEventListener('load', () => {
    let songThumb = "./src/songs/c_thumb.png";
    let songDefault = "./src/songs/Close to the Edge.webm";
    let songTitle = "Close to the Edge"

    const musicLoaded = () => {
        try {
            loadSong(songThumb, songDefault, 405.75);
        } catch (e) {
            setTimeout(function(){musicLoaded()}, 5);
        }
    }
    musicLoaded()

});