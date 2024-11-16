export const Funnies = () => {

  let data = {
    "debug":false,
    "debug_list":[],
    "george":false,
    "george_list":[],
    "happyTrail":false,
    "secret_letters":false
  }

  const body = document.getElementById("body")

  function happyTrail (e) {
      var div = document.createElement('div');

      div.classList.add('happyTrail');

      Object.assign(div.style, {
          top: e.pageY + 'px',
          left: e.pageX + 'px'
      });

      document.body.appendChild(div);
      setTimeout(function(){document.body.removeChild(div)}, 290);
  }

  // GEORGE 
  const addHearts = () => {
    let titlesList = document.getElementsByTagName("h1")

    for (let i = 0; i < titlesList.length; i++) {
      const title = titlesList[i];
      title.innerHTML = "❤" + title.innerHTML + "❤"
    }

  }

  const enableHappyTrail = () => {
      data["happyTrail"] = true
      addEventListener('mousemove', happyTrail);

      alert("Parabens! Ganhou uma calda pro mouse.. Você pode ativar/desativar apertando a tecla T.")
  }

  let randHeart = () => {
    let r_width = Math.random() * document.documentElement.clientWidth;
    let r_height = Math.random() * document.documentElement.clientHeight;

    var div = document.createElement('div');

    div.classList.add('heart');
    div.classList.add('big');

    Object.assign(div.style, {
        top: r_width + 'px',
        left: r_height + 'px'
    });

    document.body.appendChild(div);

    setTimeout(function(){ document.body.removeChild(div) }, 4000);
    setTimeout(function(){randHeart()}, 500);
  }

  let running = false;
  function heartTrail (e) {
    if (running == true) {return}
    running = true;
    var div = document.createElement('div');

    div.classList.add('heart');

    Object.assign(div.style, {
        top: e.pageY + 'px',
        left: e.pageX + 'px'
    });

    document.body.appendChild(div);
    setTimeout(function(){running = false}, 30);
    setTimeout(function(){document.body.removeChild(div)}, 500);
  }

const enableGeorgeMode = () => {
    data["george"] = true;
    addEventListener('mousemove', heartTrail);
    randHeart()
    addHearts()

    // alert("Parabens! Ganhou uma calda pro mouse.. Você pode ativar/desativar apertando a tecla T.");
}

  const secretOffScreen = (e) => {
    if (e.pageX >= 1.2*body.offsetWidth) {
      alert("Another One")
    }
  }
  addEventListener('mousemove', secretOffScreen);

  // LETTERS SECRET
  let letters = []
  let discoverSecret = (e) => {
    e.style.color = "blue"
    e.onclick = () => {} // overwriting function

    letters.push(e.innerHTML)
    
    // SECRET LETTERS FOUND
    if (letters.length >= 7) {
      data["secret_letters"] = true
      enableHappyTrail()
    }
  }

  let secretLetters = document.getElementsByClassName('secret');
  for (let l = 0; l < secretLetters.length; ++l) {
      let lBtn = secretLetters[l];
      lBtn.onclick = () => {discoverSecret(lBtn)}
  }

  // LETTERS KEYPRESS
  body.onkeydown = (e) => {
    if (e["key"] == "t" && data["secret_letters"]) {
      if (data["happyTrail"]){
        removeEventListener('mousemove', trail);
        data["happyTrail"] = false
      } else {
        addEventListener('mousemove', trail);
        data["happyTrail"] = true
      }
    }

    if ("george".split("".includes(e["key"]))) {
      data["george_list"].push(e["key"])
      if (data["george_list"].join("") == "george") {
        data["george"] = true
        enableGeorgeMode()
      }
    }

    if ("debug".split("").includes(e["key"])) {
        data["debug_list"].push(e["key"])
        
        if (data["debug_list"].join("") == "debug") {
            for (const item in data) {
                if (data[item] == false) {data[item] = true}
            }
            enableHappyTrail()
            console.log("DEBUG MODE ACTIVATED.")
        }
    }

    if (e["key"] == "Backspace") {
      data["george_list"] = []
      data["debug_list"] = []
    }

  }

}
