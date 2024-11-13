let letters = []

let discoverSecret = (e) => {
  e.style.color = "blue"
  letters.push(e.innerHTML)
  if (letters.length >= 7) {
    alert("achou o segredo parabens")
  }
}

let secretLetters = document.getElementsByClassName('secret');
for (let l = 0; l < secretLetters.length; ++l) {
    let lBtn = secretLetters[l];
    lBtn.onclick = () => {discoverSecret(lBtn)}
}