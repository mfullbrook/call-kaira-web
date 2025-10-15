import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'http://reception.callkaira.test:8000/docs.openapi',
    output: 'app/app-client',
    plugins: [
        {
            name: '@hey-api/client-fetch',
        },
        {
            asClass: true,
            name: '@hey-api/sdk',
        }
    ],
});
