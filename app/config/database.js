module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: env("DATABASE_TYPE", "postgres"),
        host: env("DATABASE_HOST", ""),
        port: env.int("DATABASE_PORT", 0),
        database: env("DATABASE_NAME", ""),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
      },
      options: {
        ssl: false,
      },
    },
  },
});
