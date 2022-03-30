module.exports = (app) => {
  app.use('/users', require('./User/UserRoutes'));
};
