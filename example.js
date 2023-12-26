import { h, render } from "//esm.sh/preact";

// html lang
var lang = navigator.language || navigator.userLanguage;
document.documentElement.setAttribute("lang", lang);

// Meta Charset
var charset = document.createElement("meta");
charset.setAttribute("charset", "utf-8");
document.getElementsByTagName("head")[0].appendChild(charset);

// Meta Viewport
var viewport = document.createElement("meta");
viewport.setAttribute("name", "viewport");
viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
document.getElementsByTagName("head")[0].appendChild(viewport);

// Content
const app = h("h1", null, "Привет, мир!");
render(app, document.body);