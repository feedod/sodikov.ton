import { render } from "//esm.sh/preact";
import htm from "//esm.sh/htm";
import {
  MiniApp,
  ClosingBehavior,
  postEvent
} from "//cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs";

var root = document.body;

const app = h('h1', null, 'Привет, мир!');
render(app, root);