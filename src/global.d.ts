import type Browser from 'webextension-polyfill';

export type * from './vite-env';

declare global {
    declare const browser: typeof Browser;
}

declare module '*.svg' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.json' {
    const content: string;
    export default content;
}
