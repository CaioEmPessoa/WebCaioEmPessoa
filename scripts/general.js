export const General = () => {
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
              executeScripts(elmnt);
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
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

  function executeScripts(elmnt) {
    var scripts = elmnt.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var script = document.createElement("script");
      script.text = scripts[i].text;
      document.head.appendChild(script).parentNode.removeChild(script);
    }
  }

  includeHTML();

  const topMenuChange = () => {
    const topMenuDiv = document.getElementById("top-menu")
    const topMenuFixedDiv = document.getElementById("top-menu-fixed")
  
    if (window.scrollY <= 10) {
      topMenuDiv.style.visibility = "initial"
      topMenuFixedDiv.style.visibility = "hidden"
    } else {
      topMenuDiv.style.visibility = "hidden"
      topMenuFixedDiv.style.visibility = "initial"
    }
  }
  
  addEventListener("scroll", topMenuChange)
  
}