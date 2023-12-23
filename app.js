import { render } from 'https://esm.sh/preact';
import htm from 'https://esm.sh/htm';
import { init, MiniApp, ClosingBehavior, postEvent } from 'https://cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs';

const { MiniApp, closingBehaviour, mainButton, viewport } = init();

viewport.expand();

miniApp.setHeaderColor('bg_color');

closingBehaviour.enableConfirmation();