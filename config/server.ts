export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env(
    'RENDER_EXTERNAL_URL',
    'https://friendly-dev-backend-rexa.onrender.com'
  ),
  proxy: true, // 👈 this makes Render HTTPS work properly
  app: {
    keys: env.array('APP_KEYS'),
  },
  settings: {
    cors: {
      origin: ['*'],
    },
  },
});
