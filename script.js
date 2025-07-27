

window.onload = function () {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light")
    }
    if (localStorage.getItem("fontSize")) {
        localStorage.setItem("fontSize", "20")
    }

    let body = document.querySelector("body");
    let newSize = localStorage.getItem('fontSize');
    body.style.fontSize = newSize + "px";

    let theTheme = document.getElementById('theme');

    if (localStorage.getItem("theme") == "light") {
        theTheme.setAttribute('href', '/styles/light.css');
    } else {
        theTheme.setAttribute('href', '/styles/dark.css');
    }
}
// window.onscroll = function() {scrollFunction()};

function toggleTheme() {
    let theTheme = document.getElementById('theme');
    if (localStorage.getItem("theme") == "light") {
        theTheme.setAttribute('href', '/styles/dark.css');
        localStorage.setItem("theme", "dark");
    } else {
        theTheme.setAttribute('href', '/styles/light.css');
        localStorage.setItem("theme", "light");
    }
}


function fontSizeIncrease() {
    let body = document.querySelector("body");
    let fontSize = window.getComputedStyle(body).getPropertyValue('font-size');

    if (parseInt(fontSize.split("px").join("")) < 40) {

        let size = parseInt(fontSize.split("px").join("")) + 2;
        localStorage.setItem('fontSize', size);
        body.style.fontSize = size + "px";
    }
}
function fontSizeDecrease() {
    let body = document.querySelector("body")
    let fontSize = window.getComputedStyle(body).getPropertyValue('font-size');

    if (parseInt(fontSize.split("px").join("")) > 14) {

        let size = parseInt(fontSize.split("px").join("")) - 2;
        localStorage.setItem('fontSize', size);
        body.style.fontSize = size + "px";
    }
}


// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }