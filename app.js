import { h, render } from "//esm.sh/preact";
import {
  MiniApp,
  ClosingBehavior,
  postEvent
} from "//cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs";

const app = h("h1", null, "Привет, мир!");
const app += h("h1", null, "Привет, мир!");

render(app, document.body);