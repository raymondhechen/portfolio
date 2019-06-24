// When the user clicks on the button, open the modal 
function displayModal() {
    document.getElementById("pmodal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    document.getElementById("pmodal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function (event) {
    if (event.target == document.getElementById("pmodal")) {
        document.getElementById("pmodal").style.display = "none";
    }
}