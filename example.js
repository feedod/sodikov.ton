import { h, render } from "https://esm.sh/preact@10.19.3";
import i18next from 'https://esm.sh/i18next@23.7.12';

i18next.init({
  resources: {
    en: {
      translation: {
        "hi": "Hello world!"
      }
    },
    ru: {
      translation: {
        "hi": "Привет, мир!"
      }
    }
  }
});

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
const app = h("h1", null, i18next.t("hi"));
render(app, document.body);

function loadScript(src, onLoadCallback, onErrorCallback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = onLoadCallback;
  script.onerror = onErrorCallback;
  document.body.appendChild(script);
}