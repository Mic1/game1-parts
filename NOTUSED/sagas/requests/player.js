/* const sql = require("mssql");

const sqlConfig = {
	user: "connect1",
	password: "connect1",
	database: "LastWord",
	server: "localhost",
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		//port: 4418,
		encrypt: false,
		trustServerCertificate: true,
	},
}; */

/* export async function getPlayerSels() {
	try {
		await sql.connect(sqlConfig);
		const result = await sql.query`select * from plyr_typ`;
		console.dir(result);
	} catch (err) {
		console.log("err: ", err);
	}
} */
