// When the user clicks on the button, open the modal 
function displayModal(i) {
    document.getElementById(i).style.display = "block";
    modalFadeIn(document.getElementById(i));
}

// When the user clicks on <span> (x), close the modal
function closeModal(i) {
    document.getElementById(i).style.display = "none";
    modalFadeOut(document.getElementById(i));
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function (event) {
    if (event.target == document.getElementById("mmodal")) {
        menufadeOut(document.getElementById("mmodal"));
    }
    else {
        var cards = ["rmodal1", "rmodal2", "rmodal3", "rmodal4", "rmodal5", "rmodal6", "pmodal1"];
        var curr;

        for (var i = 0; i < cards.length; i++) {
            var div = document.getElementById(cards[i]);
            if (div.style.display == "block") {
                curr = div;
            }
        }

        if (event.target == curr) {
            modalFadeOut(curr);
            //curr.style.display = "none";
        }
    }
}

// Fade in Function
function modalFadeIn(element) {
    var op = 0.0;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 10);
}

function modalFadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 10);
}

function menufadeOut(element) {
    var op = 0.90;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 10);
}