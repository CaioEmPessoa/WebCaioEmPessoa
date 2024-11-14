// transform this ones into classes
export const Index = () => {

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
        if (dir) {
            imgIndex += 1;
        } else {
            imgIndex -= 1;
        }
        pfpImg.src = "/src/imgs/pfp/" + imgs[imgIndex];
    }

    let imgs = [];
    let imgIndex = 0;
    const pfpImg = document.getElementById("pfp-img");

    $.getJSON('/src/imgs/pfp/', img_l => {
        shuffle(img_l);
        imgs = img_l
        pfpImg.src = "/src/imgs/pfp/" + imgs[imgIndex];

        document.getElementById("right-arrow").onclick = () => {changePfp(1)};
        document.getElementById("left-arrow").onclick = () => {changePfp(0)};
    });
}


