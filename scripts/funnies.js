export const Funnies = () => {

  let data = {
    "debug":false,
    "debug_list":[],
    "trail":false,
    "secret_letters":false
  }

  function trail (e) {
      var div = document.createElement('div');

      div.classList.add('happyTrail');

      Object.assign(div.style, {
          top: e.pageY + 'px',
          left: e.pageX + 'px'
      });

      document.body.appendChild(div);
      setTimeout(function(){document.body.removeChild(div)}, 290);
      
      // SECRET OFF SCREEN BY WIDTH
      if (e.pageX >= 1.2*body.offsetWidth) {
          alert("Another One")
      }
  }

  const enableTrail = () => {
      data["trail"] = true
      addEventListener('mousemove', trail);

      alert("Parabens! Ganhou uma calda pro mouse.. Você pode ativar/desativar apertando a tecla T.")
  }

  // LETTERS SECRET
  let letters = []
  let discoverSecret = (e) => {
    e.style.color = "blue"
    e.onclick = () => {} // overwriting function

    letters.push(e.innerHTML)
    
    // SECRET LETTERS FOUND
    if (letters.length >= 7) {
      data["secret_letters"] = true
      enableTrail()
    }
  }

  let secretLetters = document.getElementsByClassName('secret');
  for (let l = 0; l < secretLetters.length; ++l) {
      let lBtn = secretLetters[l];
      lBtn.onclick = () => {discoverSecret(lBtn)}
  }

  // LETTERS KEYPRESS
  const body = document.getElementById("body")
  body.onkeydown = (e) => {
    if (e["key"] == "t" && data["secret_letters"]) {
      if (data["trail"]){
        removeEventListener('mousemove', trail);
        data["trail"] = false
      } else {
        addEventListener('mousemove', trail);
        data["trail"] = true
      }
    }

      if (["d", "e", "b", "u", "g"].includes(e["key"])) {
          data["debug_list"].push(e["key"])
          
          if (data["debug_list"].join("") == "debug") {
              for (const item in data) {
                  if (data[item] == false) {data[item] = true}
              }
              enableTrail()
              console.log("DEBUG MODE ACTIVATED.")
          }
      }

  }

}
