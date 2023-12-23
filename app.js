import m from 'https://esm.sh/mithril@2.2.2';
import { MiniApp, ClosingBehavior, postEvent } from 'https://cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs';

var root = document.body

m.mount(root, {
    view: function() {
        return m("h1", "Try me out")
    }
})