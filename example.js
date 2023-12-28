import { render } from 'https://jspm.dev/pug@3.0.2';

document.body.innerHTML = render(`
ul
  - for (let i = 0; i < 100; i++)
    li #{i}
`);