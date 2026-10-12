"use strict";
document.getElementById("url").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        go();
    }
});

function go() {
    const url = document.getElementById("url").value;
    if (!(urlValid(url))) {
        alert("Make sure you include the HTTP or HTTPS at the beginning of the URL.");
        return;
    };
    document.getElementById("result").innerHTML = "";
    const frame = `https://script.google.com/macros/s/AKfycbxjvdwpY0-jA9S5eI2vXPxR7aMFSLeKEwRcaTslnoUE3xJtNIf31VTzsyEEKPd-SgpM/exec?target=${url}`;
    const iframe = document.createElement("iframe");
    iframe.src = frame;
    document.getElementById("result").appendChild(iframe);
    iframe.setAttribute("onload", "loaded(this)");
}

function urlValid(urlString) {
    try {
        const url = new URL(urlString);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
        return false;
    }
}

function loaded(thisElement) {
    thisElement.scrollIntoView({ behavior: "smooth", block: "start" });
}