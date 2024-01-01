import { marked } from "https://esm.sh/marked@11.1.1";

document.body.innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');