const express = require("express");

const [App, Router, Get, Post, Delete, Put] = [
	"APP",
	"ROUTER",
	"GET",
	"POST",
	"DELETE",
	"PUT",
];

function pragma(Component, props) {
	const children = Array.prototype.slice.call(arguments, 2);

	if (Component === App) {
		const app = express();

		for (const child of children) {
			app[child.method](child.path, child.handler);
		}

		return app;
	} else if ([Get, Post, Delete, Post].includes(Component)) {
		const method =
			Component === Get
				? "get"
				: Component === Post
				? "post"
				: Component === Delete
				? "delete"
				: "put";

		return { method, handler: props.handler, path: props.path };
	} else if (Component === Router) {
		const router = express.Router();

		for (const child of children) {
			router[child.method](child.path, child.handler);
		}

		return { method: "use", path: props.path, handler: router };
	}
}

module.exports = { pragma, App, Router, Get, Post, Delete, Put };
