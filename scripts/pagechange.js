function changePage(nextID) {
    var bodyIDs = ["main","resume","research","projects"]
    var curr = document.getElementById("main");

    for (var i = 0; i < bodyIDs.length; i++) {
        body = document.getElementById(bodyIDs[i]);
        if (body.style.display == "flex" || body.style.display == "block") {
            curr = body;
        }
    }

    var next = document.getElementById(nextID);
    curr.style.display = "none";

    if (next == document.getElementById("resume")) {
        next.style.display = "block";
    }
    else {
        next.style.display = "flex";
    }
}