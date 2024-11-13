let data = {
  "trail":true
}

// funnies
function trail (e) {
	var div = document.createElement('div');
  
  div.classList.add('happyTrail');
  
  Object.assign(div.style, {
    top: e.pageY + 'px',
    left: e.pageX + 'px'
  });
  
  document.body.appendChild(div);
  setTimeout(function(){document.body.removeChild(div)}, 290);
  if (e.pageX >= 1.2*body.offsetWidth) {
    alert("Another One")
  }
}
addEventListener('mousemove', trail);


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

includeHTML()

const body = document.getElementById("body")
body.onkeydown = (e) => {
  if (e["key"] == "t") {
    if (data["trail"]){
      removeEventListener('mousemove', trail);
      data["trail"] = false
    } else {
      addEventListener('mousemove', trail);
      data["trail"] = true
    }
  }
}