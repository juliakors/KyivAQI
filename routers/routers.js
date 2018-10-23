

const index = require("./index");
const users = require("./users");

module.exports = function(app) {
  app.use(users);
};