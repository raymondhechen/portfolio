// When the user clicks on the button, open the modal 
function loadMenuModal() {
    document.getElementById("mmodal").style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
function closeMenuModal() {
    document.getElementById("mmodal").style.display = "none";
}

function changePageMobile(nextID) {
    // vars
    var bodyIDs = ["main", "resume", "research", "projects"];
    var curr = document.getElementById("main");

    // Find current element
    for (var i = 0; i < bodyIDs.length; i++) {
        body = document.getElementById(bodyIDs[i]);
        if (body.style.display == "flex" || body.style.display == "block") {
            curr = body;
            break;
        }
    }

    // Get next element
    var next = document.getElementById(nextID);
    curr.style.display = "none"; // Remove curr display

    // Turn on next display
    if (next == document.getElementById("resume")) {
        next.style.display = "block";
    }
    else {
        next.style.display = "flex";
    }

    curr.style.opacity = 0.1; // Set curr opacity to original
    document.getElementById("mmodal").style.display = "none";   
    fadeIn(next); // Fade in next
}