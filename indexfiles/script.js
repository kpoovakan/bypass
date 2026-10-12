"use strict";
globalThis.devMode = 0;
document.getElementById("url").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        go();
    }
});
window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "d") {
        globalThis.devMode = 1;
        const frame = document.getElementById("frame");
        if (!frame) return;
        frame.style.pointerEvents = "auto";
    } else if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "f") {
        document.getElementById("url").scrollIntoView();
        document.getElementById("url").focus();
    } else if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "r") {
        document.getElementById("url").value = "";
    }
})

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
    iframe.id = "frame";
    document.getElementById("result").appendChild(iframe);
    iframe.setAttribute("onload", "loaded(this)");
    if (globalThis.devMode) {
        iframe.style.pointerEvents = "auto";
    }
    document.getElementById("url").focus();
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