import { render } from 'solid-js/web';
import './index.css';

const container = document.getElementById('app-container') as HTMLElement;

render(
    () => (
        <div
            class={[
                'w-full',
                'h-full',
                'text-blue-500',
                'fixed',
                'left-0',
                'top-0',
                'text-2xl',
                'font-bold',
                'flex',
                'items-center',
                'justify-center',
                'bg-green-100',
                'hover:bg-green-400',
                'transition-bg-colors-duration-3000',
                'ease-in-out',
            ].join(' ')}
        >
            <span>Hello World</span>
        </div>
    ),
    container
);
