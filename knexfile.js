require("dotenv").config();
const { DATABASE_URL } = process.env;
const path = require("path");

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://ehzsaclv:zXo2x3NwrUNZzSYz5GuyLI5tUV640O5B@jelani.db.elephantsql.com/ehzsaclv",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    }
  },
};


