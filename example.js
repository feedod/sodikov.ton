import { h, render } from 'https://esm.sh/preact';

setLang(getUserLang());
setCharset("utf-8");
setViewport("width=device-width, initial-scale=1.0");
setViewport("width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no");

function setLang(content) {
  document.documentElement.setAttribute("lang", content);
}

function setCharset(content) {
  var charset = document.createElement("meta");
  charset.setAttribute("charset", content);
  document.getElementsByTagName("head")[0].appendChild(charset);
}

function setViewport(content) {
  var viewport = document.createElement("meta");
  viewport.setAttribute("name", "viewport");
  viewport.setAttribute("content", content);
  document.getElementsByTagName("head")[0].appendChild(viewport);
}

function loadScript(src, onLoadCallback, onErrorCallback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = onLoadCallback;
  script.onerror = onErrorCallback;
  document.body.appendChild(script);
}

function getUserLang() {
  return navigator.language || navigator.userLanguage;
}