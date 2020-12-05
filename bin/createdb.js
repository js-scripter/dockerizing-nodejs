var pgtools = require("pgtools");
const config = {
  user: "postgres",
  host: "localhost",
  password: "pg",
  port: 5431
};

module.exports.create = (cb)=>{
	pgtools.createdb(config, "ums", function(err, res) {
	  if (err) {
	    console.error(err.message);
	    cb(false)
	  }
	  console.log(res);
	  cb(true)
	});
}
