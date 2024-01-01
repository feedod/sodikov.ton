import { marked } from "https://esm.sh/marked@11.1.1";

// html lang
document.documentElement.setAttribute("lang", "ru");

// meta charset
var charsetMeta = document.createElement("meta");
charsetMeta.setAttribute("charset", "utf-8");
document.head.appendChild(charsetMeta);

// meta viewport
var viewportMeta = document.createElement("meta");
viewportMeta.setAttribute("name", "viewport");
viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(viewportMeta);

// github-markdown-css
loadStyle("https://esm.sh/gh/sindresorhus/github-markdown-css/github-markdown-dark.css");
addStyle("body { background-color: #0d1117; } .markdown-body { box-sizing: border-box; min-width: 200px; max-width: 980px; margin: 0 auto; padding: 45px; } @media (max-width: 767px) { .markdown-body { padding: 15px; } }");

// content
fetch("https://esm.sh/gh/feedod/sodikov.ton/example.md")
  .then((res) => res.text())
  .then((md) => {
    var article = document.createElement("article");
    article.classList.add("markdown-body");
    article.innerHTML = marked.parse(md);
    document.body.appendChild(article);
  }).catch((e) => console.error(e));
  
// title
document.title = document.title || document.body.firstElementChild.innerText.trim();

function loadStyle(url) {
  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = url;
  document.head.appendChild(style);
}

function addStyle(st) {
  var style = document.createElement("style");
  style.innerHTML = st;
  document.head.appendChild(style);
}

function loadScript(src) {
  var script = document.createElement("script");
  script.src = src;
  document.body.appendChild(src);
}