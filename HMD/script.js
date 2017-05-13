function next() {
    var frame = document.getElementById("slider");
    if (frame.classList == "") {
        frame.classList = "two";
    } else if (frame.classList == "two") {
        frame.classList = "three";
    } else if (frame.classList == "three") {
        frame.classList = "four";
    } else if (frame.classList == "four") {
        frame.classList = "";
    }

}
setInterval(next, 2000); // Time in milliseconds

// var intViewportHeight = window.innerHeight;