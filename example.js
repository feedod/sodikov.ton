import { marked } from "https://esm.sh/marked@11.1.1";

// html lang
document.documentElement.setAttribute("lang", "ru");

// meta charset
var charset = document.createElement("meta");
charset.setAttribute("charset", "utf-8");
document.getElementsByTagName("head")[0].appendChild(charset);

// meta viewport
var viewport = document.createElement("meta");
viewport.setAttribute("name", "viewport");
viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
document.getElementsByTagName("head")[0].appendChild(viewport);

// github-markdown-css
loadStyle("https://esm.sh/gh/sindresorhus/github-markdown-css/github-markdown-dark.css");
addStyle(".markdown-body { box-sizing: border-box; min-width: 200px; max-width: 980px; margin: 0 auto; padding: 45px; } @media (max-width: 767px) { .markdown-body { padding: 15px; } }");

// content
fetch("https://esm.sh/gh/feedod/sodikov.ton/example.md")
  .then((res) => res.text())
  .then((md) => {
    var article = document.createElement("article");
    article.classList.add("markdown-body");
    article.innerHTML = marked.parse(md);
    document.getElementsByTagName("body")[0].appendChild(article);
  }).catch((e) => console.error(e));
  
// title
document.title = document.title || document.body.firstElementChild.innerText.trim();

function loadStyle(url) {
  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = url;
  document.getElementsByTagName("head")[0].appendChild(style);
}

function addStyle(st) {
  var style = document.createElement("style");
  style.innerHTML = st;
  document.getElementsByTagName("head")[0].appendChild(style);
}

function loadScript(src) {
  var script = document.createElement("script");
  script.src = src;
  document.getElementsByTagName("body")[0].appendChild(src);
}