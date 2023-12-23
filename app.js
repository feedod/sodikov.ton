import { init } from 'https://cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs';

const { mainButton, viewport } = init();

mainButton.on('click', () => viewport.expand());

mainButton
  .setBackgroundColor('#ff0000')
  .setTextColor('#ffffff')
  .setText('Expand')
  .enable()
  .show();