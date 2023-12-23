import { h, render } from "//esm.sh/preact";
import { init } from "//cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs";

const { mainButton, viewport } = init();
viewport.expand();

mainButton
  .setBackgroundColor("#000000")
  .setTextColor("#ffffff")
  .setText("Publish")
  .enable()
  .show();

const app = h("h1", null, "Привет, мир!");
render(app, document.body);