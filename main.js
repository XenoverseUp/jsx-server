/** @jsx pragma */

const { pragma, App, Router, Get, Post, Delete, Put } = require("./pragma");

const app = (
	<App>
		<Get
			path="/"
			handler={(req, res) => res.send("Hi bitch! I'm aliveeee :)")}
		/>
		<Router path="/b">
			<Get path="/a" handler={(req, res) => res.send("Nested one heree!")} />
		</Router>
	</App>
);

app.listen(3000, () =>
	console.log("I am up and running at http://localhost:3000...")
);
