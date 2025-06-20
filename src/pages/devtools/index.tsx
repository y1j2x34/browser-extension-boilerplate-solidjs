import { devtools } from 'webextension-polyfill';
import { render } from 'solid-js/web';

devtools.panels.create(
    'Dev Tools from browser-extension-boilerplate-solidjs',
    'icon-34.png',
    'src/pages/devtools/index.html'
);
const root = document.getElementById('app-container') as HTMLElement;
render(() => <div>Hello World</div>, root);
