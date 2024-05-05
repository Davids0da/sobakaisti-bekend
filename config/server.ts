export default ({ env }) => ({
  url: 'https://sobakaisti.org:1337',
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: {
    enabled: true,
    ssl: true
  }
});
