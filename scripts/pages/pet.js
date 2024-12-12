const petDiv = document.getElementById("pet-div");
const hand = document.getElementById("hand-img");

petDiv.style.backgroundImage = "url('./img/preview.jpg')";

petDiv.ondragstart = function() { return false; };

// behaviour on mobile devices
if (document.documentElement.clientWidth <= 800) {

    const showHand = () => {
        petDiv.style.cursor = "grabbing!important";
        hand.style.visibility = "visible";
        petDiv.onclick = () => { hideHand() };
    }

    const hideHand = () => {
        petDiv.style.cursor = "grab";
        hand.style.visibility = "hidden";
        petDiv.onclick = () => { showHand() };
    }

    petDiv.onclick = () => { showHand() };
    
} else {
    // default (preferable) behaviour of petpet click
    petDiv.onmousedown = () => {
        petDiv.style.cursor = "grabbing!important";
        hand.style.visibility = "visible";
    };

    petDiv.onmouseup = () => {
        petDiv.style.cursor = "grab";
        hand.style.visibility = "hidden";
    };
}

const fileInput = document.getElementById('fileInput');
const changeImgBtn = document.getElementById('change-img');

changeImgBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    changeImg();
})

const changeImg = () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            petDiv.style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(file);
    }
}

function uploadFiles() {
    console.log("upload")
    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            petDiv.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    console.log("upload")
    uploadFiles();
}

// form.addEventListener('submit', handleSubmit); // not being used?? but triggers an error