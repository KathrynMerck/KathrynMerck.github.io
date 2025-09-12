/** File: general.js
GUI Assignment: Creating Your First Web Page
Kathryn Merck, UMass Lowell Computer Science, kathryn_merck@student.uml.edu
Copyright (c) 2025 by Kathryn. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated 9/10/25
adds a not yet implemented alert */

const notYetImplemented = document.getElementsByClassName("nyi");
for(const el of notYetImplemented) {
    el.addEventListener("click", nyiClicked);
}

function nyiClicked() {
    alert("Feature not yet available");
}