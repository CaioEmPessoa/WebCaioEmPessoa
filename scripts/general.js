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
            elmnt.outerHTML = elmnt.innerHTML
            elmnt.innerHTML = ""
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
      script.async = true;
      script.text = scripts[i].text;
      document.head.appendChild(script).parentNode.removeChild(script);
    }
  }

  includeHTML();

  const topMenuChange = () => {
    const topMenuDiv = document.getElementById("top-menu")
    const topMenuFixedDiv = document.getElementById("top-menu-fixed")
  
    if (topMenuDiv == null || topMenuFixedDiv == null) { return } // when open a page already scrolled, some menus may not appear

    if (window.scrollY <= 30) {
      topMenuDiv.style.visibility = "initial"
      topMenuFixedDiv.style.visibility = "hidden"
      if (window.screen.width <= 800) {
        document.getElementById("top-menu-return").style.visibility = "hidden"
      }

    } else {
      topMenuDiv.style.visibility = "hidden"
      topMenuFixedDiv.style.visibility = "initial"
      if (window.screen.width <= 800) {
        document.getElementById("top-menu-return").style.visibility = "visible"
        topMenuFixedDiv.style.visibility = "hidden"
      } else {
        topMenuFixedDiv.style.visibility = "initial"
      }
    }
  }
  
  addEventListener("scroll", topMenuChange)

  let configBtn = document.getElementById("config-btn")
  configBtn.onclick = () => {alert("Não faço nada ainda :P")}
 
  /*
    CODE TO SWIPE TO OPEN CONFIG / TABS ON MOBILE
    const onPointerMove = () => {
        if (isDragging == false) return
        
        const dragDiff = event.clientX - dragStart;
        if (Math.abs(dragDiff) > 8) { 
            if (dragDiff > 0) {
                moveImg(-1);  // left
            } else {
                moveImg(1);   // right
            }
        }
    }
    const onPointerDown = (event) => {
        dragStart = event.clientX;
        isDragging = true;
    };
    const onPointerUp = (event) => {
        isDragging = false;
    };
    // Add event listeners to the image container
    // !!!!!! REMOVED CAUSE BETTER WIHOUT IT BUT MAITAIN CODE IF CHANGE IN FUTURE !!!!!! //
    // const imgContainer = document.getElementById("full-img-div");
    // imgContainer.addEventListener("pointerdown", onPointerDown);
    // imgContainer.addEventListener("pointermove", onPointerMove);
    // imgContainer.addEventListener("pointerup", onPointerUp);
    // imgContainer.addEventListener("pointerleave", onPointerUp);


  */
  
}