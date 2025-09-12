
/** File: ricky.js
GUI Assignment: Creating Your First Web Page
Kathryn Merck, UMass Lowell Computer Science, kathryn_merck@student.uml.edu
Copyright (c) 2025 by Kathryn. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated 9/10/25
Rune decoder and also reveal insta link once completed, not super optimized */
const runeMap = new Map();
runeMap.set("feh", ["&#x16A0;", "ᚠ",  "f"]);
runeMap.set("ur", ["&#x16A2;", "ᚢ", "u"]);
runeMap.set("urv", ["&#x16A2;", "ᚢ", "v"]);
runeMap.set("thorn", ["&#x16A6;", "ᚦ", "th"]);
runeMap.set("os", ["&#x16A9;", "ᚩ", "o"]);
runeMap.set("rada", ["&#x16B1;", "ᚱ", "r"]);
runeMap.set("cen", ["&#x16B3;", "ᚳ", "c"]);
runeMap.set("geofu", ["&#x16B7;", "ᚷ", "g"]);
runeMap.set("wyn", ["&#x16B9;", "ᚹ", "w"]);
runeMap.set("haegil", ["&#x16BA;", "ᚺ", "h"]);
runeMap.set("naed", ["&#x16BE;", "ᚾ", "n"]);
runeMap.set("is", ["&#x16C1;", "ᛁ", "i"]);
runeMap.set("peord", ["&#x16C8;", "ᛈ", "p"]);
runeMap.set("sygil", ["&#x16CB;", "ᛋ", "s"]);
runeMap.set("ti", ["&#x16CF;", "ᛏ", "t"]);
runeMap.set("berc", ["&#x16D2;", "ᛒ", "b"]);
runeMap.set("eh", ["&#x16D6;", "ᛖ", "e"]);
runeMap.set("mon", ["&#x16D7;", "ᛗ", "m"]);
runeMap.set("lagu", ["&#x16DA;", "ᛚ", "l"]);
runeMap.set("daeg", ["&#x16DE;", "ᛞ", "d"]);
runeMap.set("ac", ["&#x16AA;", "ᚪ", "a"]);
runeMap.set("yr", ["&#x16A3;", "ᚣ", "y"]);
const tags = new Set(["feh", "ur", "urv", "thorn", "os", "rada", "cen", "geofu", "wyn", "haegil", "naed", "is", "peord", "sygil", "ti", "berc", "eh", "mon", "lagu", "daeg", "ac", "yr"]);
let instaRevealed = false;

for(const tag of tags) {
    const els = document.getElementsByClassName(tag);
    for(const el of els) {
        el.classList.add("runeHover");
        el.addEventListener("click", function () {toggle(tag, els);});
    }
}

function toggle(tag, els) {
    for(el of els){
        el.classList.remove("runeHover");
        if(el.innerHTML == runeMap.get(tag)[0] || el.innerHTML == runeMap.get(tag)[1]);
            el.innerHTML = runeMap.get(tag)[2];
    }
    if(tags.has(tag))
        tags.delete(tag);
    if(tags.size == 0 && instaRevealed == false)
        revealInsta();
}

function revealInsta() {
    const instaDiv = document.getElementById("instaLink");
    const runesP = document.getElementsByClassName("runes")[0];
    const bodyContainer = document.getElementById("bodyContainer");
    instaDiv.style.opacity = "100%";
    instaDiv.style.zIndex = "2";
    runesP.style.opacity = "0%";
    runesP.style.textShadow = "0px 2px 5px white";
    runesP.style.color = "white";
    runesP.style.transform = "translate(-500%, -500%)"
    bodyContainer.style.boxShadow = "0px 0px 100px aquamarine inset";
    bodyContainer.style.backgroundColor = "transparent";
    instaRevealed = true;
}

function doubleOpen(selfHref, blankHref) {
    window.open(blankHref);
    document.location = selfHref;
}