const eBoardTable = document.getElementsByClassName("eboardtable")[0];
const eBoardConnor = document.getElementById("connorPhoto");
const exiled = document.getElementsByClassName("exiled");

const tableAngle = Math.atan((eBoardTable.clientHeight) / eBoardConnor.clientWidth);
const diagLength = Math.hypot(eBoardTable.clientHeight, eBoardConnor.clientWidth);
const tableDeg = tableAngle * 180 / Math.PI;
for (const exile of exiled) {
    exile.style.width = (diagLength - 100) + "px";
    exile.style.transform = "rotate(" + tableDeg + "deg) translate(0, -30px)";
}