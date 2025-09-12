/** File: eboard.js
GUI Assignment: Creating Your First Web Page
Kathryn Merck, UMass Lowell Computer Science, kathryn_merck@student.uml.edu
Copyright (c) 2025 by Kathryn. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated 9/10/25
makes a diagonal "exiled" banner, rip connor*/
const eBoardTable = document.getElementsByClassName("eboardtable")[0];
const eBoardConnor = document.getElementById("connorPhoto");
const exiled = document.getElementsByClassName("exiled");

const tableAngle = Math.atan((eBoardTable.clientHeight) / eBoardConnor.clientWidth); //get diagonal angle of column in rads
const diagLength = Math.hypot(eBoardTable.clientHeight, eBoardConnor.clientWidth); //get diagonal length of column in px;
const tableDeg = tableAngle * 180 / Math.PI; //convert the rad value to degrees
for (const exile of exiled) {
    exile.style.width = (diagLength - 100) + "px";
    exile.style.transform = "rotate(" + tableDeg + "deg) translate(0, -30px)";
}