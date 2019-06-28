// Change page function
function changePage(nextID) {
    // vars
    var bodyIDs = ["main","about","research","projects"];
    var btnIds = ["btnm","btna","btnr","btnp"];
    var curr = document.getElementById("main");
    var currBtn = document.getElementById("btnm")

    // Find current element
    for (var i = 0; i < bodyIDs.length; i++) {
        body = document.getElementById(bodyIDs[i]);
        if (body.style.display == "flex" || body.style.display == "block") {
            curr = body;
            currBtn = document.getElementById(btnIds[i]);
            break;
        }
    }

    // Get next element
    var next = document.getElementById(nextID);
    var nextBtn = document.getElementById(btnIds[bodyIDs.indexOf(nextID)]);
    curr.style.display = "none"; // Remove curr display

    // Turn on next display
    next.style.display = "flex";

    curr.style.opacity = 0.1; // Set curr opacity to original
    fadeIn(next); // Fade in next

    returnBtn(currBtn); // Return curr btn to original
    changeBtn(nextBtn); // Change next button properties
}

// Fade in Function
function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 10);
}

// Reset all button properties to CSS sheet
function returnBtn(element) {
    element.style.cursor = null;
    element.style.color = null;
    element.style.pointerEvents = null;
}

// Set following inline styles
function changeBtn(element) {
    element.style.cursor = "default";
    element.style.color = "#0059b3";
    element.style.pointerEvents = "none";
}