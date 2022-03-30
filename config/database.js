const config = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'sp-main',
  dialect: process.env.DB_DIALECT || 'mysql',
  host: process.env.DB_HOST || 'localhost',
  // logging: process.env.NODE_ENV === 'development' ? console.log : console.log,
  logging: false,
};

module.exports = {
  development: { ...config },
  master: { ...config },
};
