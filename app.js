import { init } from '//cdn.jsdelivr.net/npm/@tma.js/sdk@1.2.1/dist/index.mjs';

const { mainButton, viewport } = init();

mainButton.on('click', () => viewport.expand());

mainButton
  .setBackgroundColor('#ffffff')
  .setTextColor('#000000')
  .setText('Expand')
  .enable()
  .show();