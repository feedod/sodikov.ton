import { render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';
import { init, MiniApp, ClosingBehavior, postEvent } from 'https://cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs';

const { mainButton, viewport } = init();
viewport.expand();

const miniApp = new MiniApp({
  headerColor: 'bg_color',
  backgroundColor: 'bg_color',
  postEvent,
});

const closingBehaviour = new ClosingBehavior(false, postEvent);
closingBehaviour.enableConfirmation();