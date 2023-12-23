import { h, render } from 'https://esm.sh/preact';

  // Создаём свое приложение
  const app = h('h1', null, 'Привет, мир!');

  render(app, document.body);