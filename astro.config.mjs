import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://daytonhydrojetting.prosapp.site',
  trailingSlash: 'always',
  build: { format: 'directory' }
});
