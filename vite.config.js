import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/style.css',
                'resources/js/app.js',
                'resources/js/missions.jsx',
                'resources/js/people-of-interest.jsx',
                'resources/js/person-of-interest.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});
