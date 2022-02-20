const path = require("path");
require("dotenv").config();
const { DATABASE_URL} = process.env;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    }
  },
};
