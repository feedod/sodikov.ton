import { render } from 'https://esm.sh/pug@3.0.2';

document.body.innerHTML = render(`
ul
  - for (let i = 0; i < 100; i++)
    li #{i}
`);