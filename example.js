import { h, render } from "https://esm.sh/preact";

// html lang
document.documentElement.setAttribute(
  "lang",
  navigator.language || navigator.userLanguage
);

// meta charset
var charset = document.createElement("meta");
charset.setAttribute("charset", "utf-8");
document.getElementsByTagName("head")[0].appendChild(charset);

// meta viewport
var viewport = document.createElement("meta");
viewport.setAttribute("name", "viewport");
viewport.setAttribute(
  "content",
  "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
);
document.getElementsByTagName("head")[0].appendChild(viewport);

// content
const app = h("h1", null, "Привет, мир!");
render(app, document.body);


function loadScript(src, onLoadCallback, onErrorCallback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = onLoadCallback;
  script.onerror = onErrorCallback;
  document.body.appendChild(script);
}