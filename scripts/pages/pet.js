const petDiv = document.getElementById("pet-div")
const hand = document.getElementById("hand-img")

petDiv.style.backgroundImage = "url('./img/preview.jpg')"

petDiv.ondragstart = function() { return false; };

petDiv.onmousedown = () => {
    petDiv.style.cursor = "grabbing"
    hand.style.visibility = "visible"
}

petDiv.onmouseup = () => {
    petDiv.style.cursor = "grab"
    hand.style.visibility = "hidden"            
}