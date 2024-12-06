const getImgParam = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let imgParam = urlParams.get('img');
    return imgParam;
}

const imgList = []
const addRefImg = () => {

    const imagesRowList = document.getElementsByClassName("imgs-row");

    for (const imgsRow of imagesRowList) {

        const imgsInRow = imgsRow.getElementsByTagName("img");

        for (const img of imgsInRow) {
            const imgTitle = img.src.split("/imgs/")[1]
            imgList.push(imgTitle)

            const imgUrl = document.createElement("a");
    
            imgUrl.href = "?img=" + imgTitle;
            
            img.parentNode.insertBefore(imgUrl, img)
            imgUrl.appendChild(img);
        }
    }
}

addRefImg()

const loadFullImg = (imgName) => {
    document.getElementById("full-img-div").style.display = "flex";
    document.getElementById("full-img").src = `./imgs/${imgName}`;
    document.getElementsByTagName('html')[0].style.overflow = "hidden";

    const currentIndex = imgList.indexOf(imgName)+1;
    const currentIndexP = document.getElementById("current-img-index");
    currentIndexP.innerHTML =  currentIndex;
    
    const maxIndex = imgList.length;
    const maxIndexP = document.getElementById("max-img-index");
    maxIndexP.innerHTML =  maxIndex;
};

const moveImg = (dir) => {
    let imgParam = getImgParam()
    
    let current_i = imgList.indexOf(imgParam);
    let next_i = current_i+(dir);
    
    if (next_i < 0) {
        next_i = imgList.length-1;
    }
    else if (next_i >= imgList.length) {
        next_i = 0;
    }
    window.history.pushState(null, 'Jooj Takasse', window.location.pathname + "?img=" + imgList[next_i]);
    loadFullImg(imgList[next_i]);
};

// LOAD FULL IMG ON BACK/FOWARD BROWSER INTERACTION
window.addEventListener("popstate", (e) => {
    let imgParam = getImgParam();
    loadFullImg(imgParam);
});

// IF URL IS TYING TO ACESS FULLSCREANED IMG
let imgParam = getImgParam()
if (imgParam != null) {
    loadFullImg(imgParam);
};

// IMG MOVING INTERACTIONS

const backProjPage = () => {
    document.getElementById("full-img-div").style.display = "None";
    document.getElementById("full-img").src = "";
    document.getElementsByTagName('html')[0].style.overflow = "scroll";
    
    let current_img = document.querySelector(`a[href='?img=${getImgParam()}']`);
    current_img.scrollIntoView();

    window.history.pushState(null, 'Jooj Takasse', window.location.pathname);
}

// PRESS KEYBOARD ARROWKEYS
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && getImgParam() != null) {
        moveImg(-1);
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && getImgParam() != null) {
        moveImg(1);
    }
});

// CLICK ON WEB BUTTONS 
document.getElementById("left-arrow").onclick = () => moveImg(-1);
document.getElementById("right-arrow").onclick = () => moveImg(+1);

// CLICK OUTSIDE OF IMG TO CLOSE IT
document.getElementById("exit-div").onclick = () => {backProjPage()}