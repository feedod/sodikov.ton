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


const twaScript = document.createElement('script');
twaScript.src = 'https://telegram.org/js/telegram-web-app.js';

twaScript.onload = () => {
      Telegram.WebApp.expand();
    
      var twaViewport = document.createElement("meta");
      twaViewport.setAttribute("name", "viewport");
      twaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no");
      twaViewport.getElementsByTagName("head")[0].appendChild(twaViewport);
};

twaScript.onerror = () => {
  console.log('Error occurred while loading script');
};

document.body.appendChild(twaScript);

// Content
const app = h("h1", null, "Привет, мир!");
render(app, document.body);