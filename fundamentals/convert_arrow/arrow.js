$(document).ready(function () {
    document.getElementById("button").onclick = () => {
        setBackgroundColorById("paragraph", "blue");
    }
    document.getElementById("alert").onclick = () => {
        alert(document.getElementById("popup-input").value);
    }
    document.getElementById("hover-this").onmouseover = () => {
        setBackgroundColorById("body", "red");
    }
    document.getElementById("hover-this").onmouseout = () => {
        setBackgroundColorById("body", "white");
    }
    getValueFromId = (id) => {
        return document.getElementById(id).value;
    }
    setBackgroundColorById = (id, color) => {
        document.getElementById(id).style = "background-color: " + color;
    }
    mouseOverFunction = (el) => {
        el.style = "background-color: black";
    }
});