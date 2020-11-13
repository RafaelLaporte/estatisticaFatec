let modalPosition = document.getElementById("modal-position");

// Get the button that opens the modal
let btnPosition = document.getElementById("help-position");

// Get the <span> element that closes the modal
let spanPosition = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btnPosition.onclick = function() {
    modalPosition.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanPosition.onclick = function() {
    modalPosition.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalPosition.style.display = "none";
    }
}