const notYetImplemented = document.getElementsByClassName("nyi");
for(const el of notYetImplemented) {
    el.addEventListener("click", nyiClicked);
}

function nyiClicked() {
    alert("Feature not yet available");
}