// jshint esversion: 6

function main() {
  if (this.id == "shirts") {
    document.getElementById("article") = "";
  }
}

let onloadHandler = function() {
  //Register the onclick handler for all the buttons
  var buttons = document.getElementsByClassName("button");
  for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", dispatcher);
  }

};

//register the onload handler
window.addEventListener("load", onloadHandler);