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

// content
fetch("https://esm.sh/gh/feedod/sodikov.ton/example.md")
  .then((res) => res.text())
  .then((md) => document.body.innerHTML = marked.parse(md))
  .catch((e) => console.error(e));
