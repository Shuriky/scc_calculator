console.log("Hello World");

// Advanced Settings Modal
// Get the modal
var modal = document.querySelector(".settings-modal");

// Get the button that opens the modal
var btn = document.querySelector("#advanced-settings");

// Get the <span> element that closes the modal
var span = document.querySelector("#cancel-button");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on cancel, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}