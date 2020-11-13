//if(document.getElementById)

// Get the modal
let modalCSV = document.getElementById("modal-csv");

// Get the button that opens the modal
let helpCSV = document.getElementById("help-csv");

// Get the <span> element that closes the modal
let spanCSV = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
helpCSV.onclick = function() {
    modalCSV.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanCSV.onclick = function() {
    modalCSV.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modalCSV.style.display = "none";
    }
}
