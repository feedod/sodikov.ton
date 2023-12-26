import {
    h,
    render
} from "//esm.sh/preact";

var viewport = document.createElement("meta");
viewport.setAttribute("name", "viewport");
viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
document.getElementsByTagName("head")[0].appendChild(viewport);

const app = h("h1", null, "Привет, мир!");
render(app, document.body);