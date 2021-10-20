export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432
    },
    secretKey: process.env.SECRETKEY_TOKEN,
    secretKeyRefresh: process.env.SECRETKEY_REFRESH_TOKEN
  });
  