let dot1 = document.querySelectorAll(".dots div")[0];
let dot2 = document.querySelectorAll(".dots div")[1];
let dot3 = document.querySelectorAll(".icon-speech")[0];
let article = document.getElementsByTagName("article")[0];
let header = document.getElementsByTagName("header")[0];
let section = document.getElementsByTagName("section")[0];

article.style.display = "none";
section.style.display = "none";

dot1.onclick = function() {
    article.style.display = "none";
    section.style.display = "none";
    header.style.display = "block";
}

dot2.onclick = function() {
    article.style.display = "block";
    section.style.display = "none";
    header.style.display = "none";
}

dot3.onclick = function() {
    article.style.display = "none";
    section.style.display = "block";
    header.style.display = "none";
}