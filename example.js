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

// load github-markdown-css
loadStyle("https://esm.sh/gh/sindresorhus/github-markdown-css/github-markdown-dark.css");

// content
fetch("https://esm.sh/gh/feedod/sodikov.ton/example.md")
  .then((res) => res.text())
  .then((md) => document.body.innerHTML = marked.parse(md))
  .catch((e) => console.error(e));

function loadStyle(url) {
  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = url;
  document.getElementsByTagName("head")[0].appendChild(style);
}

function loadScript(src) {
  var script = document.createElement("script");
  script.src = src;
  document.getElementsByTagName("body")[0].appendChild(src);
}