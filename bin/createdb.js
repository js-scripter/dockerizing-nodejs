var pgtools = require("pgtools");
const config = {
  user: "postgres",
  host: "localhost",
  password: "pg",
  port: 5431
};

pgtools.createdb(config, "ums", function(err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});