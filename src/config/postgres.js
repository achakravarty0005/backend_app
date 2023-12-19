const config = {
  local: {
    host: process.env.DB_HOST_ADDRESS || 'localhost',
    database: process.env.DB_NAME || 'backendProject',
    port: process.env.DB_HOST_PORT || 5432,
    username: process.env.DB_USER_NAME || process.env.USER,
    password: process.env.DB_USER_PWD || '',
    dialect: 'postgres',
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    logging: false,
    minifyAliases: true,
  },
};

module.exports.default = config;
module.exports = config;
