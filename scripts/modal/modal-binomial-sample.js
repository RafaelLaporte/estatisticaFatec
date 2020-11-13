// Get the modal
let modalSample = document.getElementById("modal-binomial-sample");

// Get the button that opens the modal
let helpSample = document.getElementById("help-binomial-sample");

// Get the <span> element that closes the modal
let spanSample = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
helpSample.onclick = function() {
    modalSample.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSample.onclick = function() {
    modalSample.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalSample.style.display = "none";
    }
}