var toggleButton = document.getElementById("toggle-button");
var hiddenContent = document.querySelectorAll(".hidden-content");

toggleButton.addEventListener("click", function () {
    for (var i = 0; i < hiddenContent.length; i++) {
        if (hiddenContent[i].style.display === "none") {
            hiddenContent[i].style.display = "block";
        } else {
            hiddenContent[i].style.display = "none";
        }
    }
});