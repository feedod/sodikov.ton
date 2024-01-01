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
viewport.setAttribute(
  "content",
  "width=device-width, initial-scale=1.0"
);
document.getElementsByTagName("head")[0].appendChild(viewport);

// content
const html = "# Sodikov";
fetch("index.md")
  .then((res) => res.text())
  .then((md) => {
      html = md;
   })
  .catch((e) => {
    html = "# Error";
  });
document.body.innerHTML = marked.parse(html);;