// Get the modal
let modalName = document.getElementById("modal-name");

// Get the button that opens the modal
let btnName = document.getElementById("help-name");

// Get the <span> element that closes the modal
let spanName = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnName.onclick = function() {
    modalName.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanName.onclick = function() {
    modalName.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalName.style.display = "none";
    }
}