// Get the modal
let modalXvalues = document.getElementById("modal-xvalues");

// Get the button that opens the modal
let helpXvalues = document.getElementById("help-xvalues");

// Get the <span> element that closes the modal
let spanXvalues = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
helpXvalues.onclick = function() {
    modalXvalues.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanXvalues.onclick = function() {
    modalXvalues.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalXvalues.style.display = "none";
    }
}