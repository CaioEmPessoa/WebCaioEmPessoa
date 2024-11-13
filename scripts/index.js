
let discoverSecret = (e) => {
  e.style.color = "blue"
}

let secretLetters = document.getElementsByClassName('secret');
for (let l = 0; l < secretLetters.length; ++l) {
    let lBtn = secretLetters[l];
    lBtn.onclick = () => {discoverSecret(lBtn)}
}