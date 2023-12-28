import { render } from "https://jspm.dev/pug@3.0.2";

const head = render(``);
const body = render(`h1 hello`);

document.head.innerHTML = head;
document.body.innerHTML = body;