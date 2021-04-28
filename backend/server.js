const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("port", 8080);
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "postgres",
	password: "test",
	database: "journals"
};

app.use(Express.static(__dirname + '/images'));

const pool = new Pool(config);

app.get("/api/public", async (req, res) => {
	// req.query.q
	try {
		const template = "select journalEntries.entry_body, journalEntries.publicity, journalEntries.u_id,  users.id from journalEntries join users on journalEntries.u_id=users.id where publicity = true;";
		const response = await pool.query(template);
		if (response.rowCount == 0) {
			res.json({ status: "no posts found"});
		} else {
			res.json({ status: "ok", results: response.rows });
		}
	} catch (err) {
		console.error("Error running query " + err);
		res.json({ status: "error" });
	}
});

app.post("/api/drafts", (req, res) => {
	console.log(req.body);
	const journalId = req.body.journalId;
	const userId = req.body.u_id;
	const public = req.body.publicity;
	const entryId = req.body.id;
	const category = req.body.category;
	const created = req.body.date_created;
	const post = req.body.entry_body;
	const lastMod = req.body.last_modified;
	const activity = req.body.activity_level;
	const engagement = req.body.engagement_level;
	const draft = req.body.publicity;
	res.json({ journalId: 3,  userId: 1, public: false, entryId: 3, category: 'Hello', created: '2021-03-30', post: 'Some Text.', lastMod: '2021-03-30', activity: 3, engagement: 3, draft: false});
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at http://localhost:${app.get("port")}`);
});