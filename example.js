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
loadStyle(
  "https://esm.sh/gh/sindresorhus/github-markdown-css/github-markdown-light.css"
);
addStyle(
  "body { background-color: #ffffff; } .markdown-body { box-sizing: border-box; min-width: 200px; max-width: 980px; margin: 0 auto; padding: 45px; } @media (max-width: 767px) { .markdown-body { padding: 15px; } }"
);

// themecolor Meta
var themeColorMeta = document.createElement("meta");
themeColorMeta.setAttribute("name", "theme-color");
themeColorMeta.setAttribute("content", "#eeeeee");
document.head.appendChild(themeColorMeta);

// content
fetch("https://esm.sh/gh/feedod/sodikov.ton/example.md")
  .then((res) => res.text())
  .then((md) => {
    // article
    var article = document.createElement("article");
    article.classList.add("markdown-body");
    article.innerHTML = marked.parse(md);
    document.body.appendChild(article);
    // title
    document.title =
      document.title || "sodikov.ton";
  })
  .catch((e) => console.error(e));

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